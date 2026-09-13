import { useEffect, useState } from 'react'
import { useAuth } from '../../context/useAuth'
import { assignmentApi, contentApi, quizApi } from '../../services/api'
import './StudentSubjects.css'

function StudentSubjects() {
  const { user } = useAuth()
  const [subjects, setSubjects] = useState([])
  const [selectedSubjectId, setSelectedSubjectId] = useState('')
  const [topics, setTopics] = useState([])
  const [selectedTopicId, setSelectedTopicId] = useState('')
  const [lessons, setLessons] = useState([])
  const [quizzes, setQuizzes] = useState([])
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [topicLoading, setTopicLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) return

    let ignore = false

    const loadStudentSubjects = async () => {
      setLoading(true)
      setError('')

      try {
        const gradesResponse = await contentApi.getGrades()
        const gradeMatch = gradesResponse.grades.find((grade) => {
          const gradeNumber = Number(String(grade.name).replace(/\D+/g, ''))
          return gradeNumber === Number(user.grade)
        })

        if (!gradeMatch) {
          setSubjects([])
          return
        }

        const subjectResponse = await contentApi.getSubjectsByGrade(gradeMatch._id)
        const enrolledSubjects = subjectResponse.subjects || []

        const subjectDetails = await Promise.all(
          enrolledSubjects.map(async (subject) => {
            const topicsResponse = await contentApi.getTopicsBySubject(subject._id)
            return {
              ...subject,
              topicCount: topicsResponse.topics?.length || 0,
              progress: 0,
              description: `${topicsResponse.topics?.length || 0} topics available`,
            }
          }),
        )

        if (!ignore) {
          setSubjects(subjectDetails)
          if (subjectDetails[0]) {
            setSelectedSubjectId(subjectDetails[0]._id)
          }
        }
      } catch (apiError) {
        if (!ignore) {
          setError(apiError.message || 'Unable to load your subjects.')
          setSubjects([])
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadStudentSubjects()

    return () => {
      ignore = true
    }
  }, [user])

  useEffect(() => {
    if (!selectedSubjectId) {
      return
    }

    let ignore = false

    const loadTopics = async () => {
      setTopicLoading(true)
      setError('')

      try {
        const response = await contentApi.getTopicsBySubject(selectedSubjectId)
        if (!ignore) {
          setTopics(response.topics || [])
          if (response.topics?.[0]) {
            setSelectedTopicId(response.topics[0]._id)
          } else {
            setSelectedTopicId('')
            setLessons([])
            setQuizzes([])
            setAssignments([])
          }
        }
      } catch (apiError) {
        if (!ignore) {
          setError(apiError.message || 'Unable to load topics for this subject.')
        }
      } finally {
        if (!ignore) {
          setTopicLoading(false)
        }
      }
    }

    loadTopics()

    return () => {
      ignore = true
    }
  }, [selectedSubjectId])

  useEffect(() => {
    if (!selectedTopicId) return

    let ignore = false

    const loadTopicDetails = async () => {
      setError('')

      try {
        const [lessonResponse, quizResponse, assignmentResponse] = await Promise.all([
          contentApi.getLessonsByTopic(selectedTopicId),
          quizApi.getByTopic(selectedTopicId),
          assignmentApi.getByTopic(selectedTopicId),
        ])

        if (!ignore) {
          setLessons(lessonResponse.lessons || [])
          setQuizzes(quizResponse.quizzes || [])
          setAssignments(assignmentResponse.assignments || [])
        }
      } catch (apiError) {
        if (!ignore) {
          setError(apiError.message || 'Unable to load this topic details.')
          setLessons([])
          setQuizzes([])
          setAssignments([])
        }
      }
    }

    loadTopicDetails()

    return () => {
      ignore = true
    }
  }, [selectedTopicId])

  const selectedSubject = subjects.find((subject) => subject._id === selectedSubjectId)

  return (
    <main className="student-subjects-page">
      <section className="student-subjects-header">
        <p className="student-subjects-label">MY SUBJECTS</p>
        <h1>What do you want to learn today?</h1>
        <p>Choose a subject and continue your learning journey.</p>
      </section>

      {error && <p className="status-banner error">{error}</p>}

      {loading ? (
        <p className="status-banner">Loading your subjects...</p>
      ) : subjects.length === 0 ? (
        <p className="status-banner empty">No subjects are assigned to your grade yet.</p>
      ) : (
        <>
          <section className="student-subjects-grid">
            {subjects.map((subject) => (
              <div className="student-subject-card" key={subject._id}>
                <div className="student-subject-icon">📘</div>

                <div className="student-subject-content">
                  <h2>{subject.name}</h2>
                  <p>{subject.description}</p>

                  <div className="subject-meta">
                    <span>{subject.topicCount} Topics</span>
                    <span>{subject.progress}% completed</span>
                  </div>

                  <div className="subject-progress-bar">
                    <div className="subject-progress-fill" style={{ width: `${subject.progress}%` }} />
                  </div>

                  <button type="button" className="subject-view-button" onClick={() => setSelectedSubjectId(subject._id)}>
                    {selectedSubjectId === subject._id ? 'Selected' : 'View Subject →'}
                  </button>
                </div>
              </div>
            ))}
          </section>

          {selectedSubject && (
            <section className="subject-detail-panel">
              <div className="section-heading">
                <h2>{selectedSubject.name}</h2>
                <p>Explore topics, lessons, quizzes, and assignments.</p>
              </div>

              {topicLoading ? (
                <p className="status-banner">Loading topics...</p>
              ) : topics.length === 0 ? (
                <p className="status-banner empty">No topics are available for this subject yet.</p>
              ) : (
                <>
                  <div className="topic-list">
                    {topics.map((topic) => (
                      <button
                        key={topic._id}
                        type="button"
                        className={selectedTopicId === topic._id ? 'topic-pill active' : 'topic-pill'}
                        onClick={() => setSelectedTopicId(topic._id)}
                      >
                        {topic.name}
                      </button>
                    ))}
                  </div>

                  {selectedTopicId && (
                    <div className="topic-content-grid">
                      <div className="detail-card">
                        <h3>Lessons</h3>
                        {lessons.length === 0 ? (
                          <p className="status-banner empty">No lessons are available for this topic.</p>
                        ) : (
                          <ul className="resource-list">
                            {lessons.map((lesson) => (
                              <li key={lesson._id}>
                                <strong>{lesson.title}</strong>
                                <p>{lesson.content}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="detail-card">
                        <h3>Quizzes</h3>
                        {quizzes.length === 0 ? (
                          <p className="status-banner empty">No quizzes are available for this topic.</p>
                        ) : (
                          <ul className="resource-list compact">
                            {quizzes.map((quiz) => (
                              <li key={quiz._id}>
                                <strong>{quiz.title}</strong>
                                <span>{quiz.questions?.length || 0} questions</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="detail-card">
                        <h3>Assignments</h3>
                        {assignments.length === 0 ? (
                          <p className="status-banner empty">No assignments are available for this topic.</p>
                        ) : (
                          <ul className="resource-list compact">
                            {assignments.map((assignment) => (
                              <li key={assignment._id}>
                                <strong>{assignment.title}</strong>
                                <span>{assignment.description}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </section>
          )}
        </>
      )}
    </main>
  )
}

export default StudentSubjects