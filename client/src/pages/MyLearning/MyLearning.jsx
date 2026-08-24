import { Link } from 'react-router-dom'
import './MyLearning.css'

function MyLearning() {
  const subjects = [
    {
      name: 'Mathematics',
      icon: '🔢',
      completed: 3,
      total: 5,
      progress: 60,
    },
    {
      name: 'Science',
      icon: '🔬',
      completed: 2,
      total: 5,
      progress: 40,
    },
  ]

  const completedLessons = [
    'Introduction to Numbers',
    'Basic Fractions',
    'Science Fundamentals',
  ]

  return (
    <main className="learning-page">

      {/* Header */}
      <section className="learning-header">
        <p className="learning-label">MY LEARNING</p>

        <h1>Keep learning, keep growing. 🌱</h1>

        <p>
          Continue your lessons and keep making progress.
        </p>
      </section>


      {/* Continue Learning */}
      <section className="learning-section">

        <div className="section-heading">
          <div>
            <h2>Continue Learning</h2>
            <p>Pick up where you left off.</p>
          </div>
        </div>

        <div className="continue-card">

          <div className="continue-icon">
            🔢
          </div>

          <div className="continue-content">

            <span>Mathematics</span>

            <h3>Introduction to Algebra</h3>

            <div className="progress-info">
              <span>70% completed</span>
              <span>7 / 10 lessons</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: '70%' }}
              ></div>
            </div>

          </div>

          <Link
            to="/dashboard/subjects"
            className="continue-button"
          >
            Continue
          </Link>

        </div>

      </section>


      {/* Your Learning */}
      <section className="learning-section">

        <div className="section-heading">
          <div>
            <h2>Your Learning</h2>
            <p>Track your progress across subjects.</p>
          </div>
        </div>

        <div className="subject-progress-grid">

          {subjects.map((subject) => (
            <div
              className="subject-progress-card"
              key={subject.name}
            >

              <div className="subject-top">

                <div className="subject-icon">
                  {subject.icon}
                </div>

                <div>
                  <h3>{subject.name}</h3>
                  <p>
                    {subject.completed} of {subject.total} lessons
                    completed
                  </p>
                </div>

              </div>

              <div className="progress-info">
                <span>{subject.progress}% completed</span>
                <span>
                  {subject.completed}/{subject.total}
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default MyLearning