import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { contentApi, progressApi } from '../../services/api'
import './Dashboard.css'

function Dashboard() {
  const { user } = useAuth()
  const [subjects, setSubjects] = useState([])
  const [progress, setProgress] = useState([])
  const [gradeName, setGradeName] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) return

    let ignore = false

    const fetchDashboardData = async () => {
      setLoading(true)
      setError('')

      try {
        const gradesResponse = await contentApi.getGrades()
        const gradeMatch = gradesResponse.grades.find((grade) => {
          const gradeNumber = Number(String(grade.name).replace(/\D+/g, ''))
          return gradeNumber === Number(user.grade) || grade.name === `Grade ${user.grade}`
        })

        const resolvedGradeName = gradeMatch?.name || `Grade ${user.grade}`
        setGradeName(resolvedGradeName)

        if (gradeMatch) {
          const subjectResponse = await contentApi.getSubjectsByGrade(gradeMatch._id)
          setSubjects(subjectResponse.subjects || [])
        } else {
          setSubjects([])
        }

        const progressResponse = await progressApi.getByUser(user.id)
        setProgress(progressResponse.progress || [])
      } catch (apiError) {
        if (!ignore) {
          setError(apiError.message || 'Unable to load dashboard data.')
          setSubjects([])
          setProgress([])
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchDashboardData()

    return () => {
      ignore = true
    }
  }, [user])

  const completedLessons = progress.filter((item) => item.lessonCompleted).length
  const quizzesCompleted = progress.filter((item) => item.quiz && item.quizScore !== undefined).length
  const overallProgress = progress.length > 0 ? Math.round((completedLessons / progress.length) * 100) : 0
  const primarySubject = subjects[0]

  return (
    <main className="dashboard-page">
      <section className="dashboard-welcome">
        <div>
          <p className="dashboard-label">LEARNREACH DASHBOARD</p>

          <h1>
            Welcome back, {user?.name || 'Student'}! 👋
          </h1>

          <span className="grade-badge">
            {gradeName || 'Loading grade...'}
          </span>

          <p className="welcome-text">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="streak-badge">
          <span>🔥</span>
          <div>
            <strong>{progress.length > 0 ? 'Learning active' : 'Start learning'}</strong>
            <small>{completedLessons} lessons completed</small>
          </div>
        </div>
      </section>

      {error && <p className="status-banner error">{error}</p>}

      {loading ? (
        <p className="status-banner">Loading dashboard...</p>
      ) : (
        <>
          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div>
                <span>Current Streak</span>
                <strong>{progress.length > 0 ? 'Active' : '0 Days'}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div>
                <span>Lessons Completed</span>
                <strong>{completedLessons}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div>
                <span>Overall Progress</span>
                <strong>{overallProgress}%</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div>
                <span>Quizzes</span>
                <strong>{quizzesCompleted}</strong>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <h2>Continue Learning</h2>
                <p>Pick up where you left off.</p>
              </div>

              <Link to="/dashboard/subjects" className="view-link">
                View Subjects →
              </Link>
            </div>

            {primarySubject ? (
              <div className="learning-card">
                <div className="learning-icon">📘</div>

                <div className="learning-content">
                  <span className="subject-name">{primarySubject.name}</span>
                  <h3>Continue with your subject content</h3>

                  <div className="progress-info">
                    <span>{overallProgress}% completed</span>
                    <span>{completedLessons} lesson entries</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
                  </div>
                </div>

                <Link to="/dashboard/subjects" className="continue-button">
                  Continue
                </Link>
              </div>
            ) : (
              <div className="learning-card empty-state-box">
                <p>No subject data is available for this grade yet.</p>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  )
}

export default Dashboard