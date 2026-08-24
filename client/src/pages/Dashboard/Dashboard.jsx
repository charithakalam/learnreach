import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const subjects = [
    {
      name: 'Mathematics',
      icon: '🔢',
      description: 'Algebra, Fractions and more'
    },
    {
      name: 'Science',
      icon: '🔬',
      description: 'Explore the world around you'
    }
  ]

  return (
    <main className="dashboard-page">

      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <div>
          <p className="dashboard-label">LEARNREACH DASHBOARD</p>

          <h1>
            Welcome back, Student! 👋
          </h1>

          <span className="grade-badge">
            Grade 8
          </span>

          <p className="welcome-text">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="streak-badge">
          <span>🔥</span>
          <div>
            <strong>4 Day Streak</strong>
            <small>Keep it going!</small>
          </div>
        </div>
      </section>


      {/* Quick Stats */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div>
            <span>Current Streak</span>
            <strong>4 Days</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div>
            <span>Lessons Completed</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div>
            <span>Overall Progress</span>
            <strong>65%</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div>
            <span>Assignments</span>
            <strong>2</strong>
          </div>
        </div>

      </section>


      {/* Continue Learning */}
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

        <div className="learning-card">

          <div className="learning-icon">
            🔢
          </div>

          <div className="learning-content">

            <span className="subject-name">
              Mathematics
            </span>

            <h3>
              Introduction to Algebra
            </h3>

            <div className="progress-info">
              <span>70% completed</span>
              <span>7 / 10</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: '70%' }}
              ></div>
            </div>

          </div>

          <button className="continue-button">
            Continue
          </button>

        </div>

      </section>

    </main>
  )
}

export default Dashboard