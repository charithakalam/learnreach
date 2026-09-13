import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { contentApi } from '../../services/api'
import './Subjects.css'

const DEFAULT_GRADES = [6, 7, 8, 9, 10]

function Subjects() {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()
  const [grades, setGrades] = useState([])
  const [selectedGrade, setSelectedGrade] = useState(user?.grade || 6)
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    const loadGrades = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await contentApi.getGrades()
        if (ignore) return

        const gradeList = response.grades || []
        setGrades(gradeList)

        const defaultGrade = user?.grade
          ? String(user.grade)
          : String(selectedGrade)

        const matchedGrade = gradeList.find(
          (grade) => String(grade.name).replace(/\D+/g, '') === defaultGrade,
        )

        const resolvedGrade = matchedGrade ? matchedGrade._id : null
        setSelectedGrade(user?.grade || selectedGrade)

        if (!resolvedGrade) {
          setSubjects([])
          return
        }

        const subjectResponse = await contentApi.getSubjectsByGrade(resolvedGrade)
        setSubjects(subjectResponse.subjects || [])
      } catch (apiError) {
        if (!ignore) {
          setError(apiError.message || 'Unable to load subjects.')
          setSubjects([])
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadGrades()

    return () => {
      ignore = true
    }
  }, [user, selectedGrade])

  const handleGradeChange = async (gradeNumber) => {
    setSelectedGrade(gradeNumber)
    setLoading(true)
    setError('')

    try {
      const gradeMatch = grades.find(
        (grade) => String(grade.name).replace(/\D+/g, '') === String(gradeNumber),
      )

      if (!gradeMatch) {
        setSubjects([])
        return
      }

      const response = await contentApi.getSubjectsByGrade(gradeMatch._id)
      setSubjects(response.subjects || [])
    } catch (apiError) {
      setError(apiError.message || 'Unable to load subjects for this grade.')
      setSubjects([])
    } finally {
      setLoading(false)
    }
  }

  const handleExplore = () => {
    if (isAuthenticated) {
      navigate('/dashboard/subjects')
      return
    }

    navigate('/login')
  }

  return (
    <main className="subjects-page">
      <section className="subjects-hero">
        <div className="subjects-badge">
          📚 LEARNREACH SUBJECTS
        </div>

        <h1>
          Learn something new, <span>every day.</span>
        </h1>

        <p>
          Explore subjects designed for students from Grades 6–10.
        </p>
      </section>

      <section className="grade-section">
        <h2>Choose your grade</h2>
        <p>
          Select your grade to explore the subjects available on LearnReach.
        </p>

        <div className="grade-buttons">
          {DEFAULT_GRADES.map((grade) => (
            <button
              key={grade}
              className={selectedGrade === grade ? 'grade-button active' : 'grade-button'}
              onClick={() => handleGradeChange(grade)}
            >
              Grade {grade}
            </button>
          ))}
        </div>
      </section>

      <section className="subjects-list">
        <div className="subjects-heading">
          <h2>Subjects for Grade {selectedGrade}</h2>
          <p>Explore subjects and begin your learning journey.</p>
        </div>

        {error && <p className="status-banner error">{error}</p>}

        {loading ? (
          <p className="status-banner">Loading subjects...</p>
        ) : subjects.length === 0 ? (
          <p className="status-banner empty">No subjects are available for this grade yet.</p>
        ) : (
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div className="subject-card" key={subject._id}>
                <div className="subject-icon">📘</div>

                <div className="subject-content">
                  <h3>{subject.name}</h3>
                  <p>Explore focused learning content for this subject.</p>

                  <button className="explore-button" onClick={() => handleExplore(subject)}>
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Subjects