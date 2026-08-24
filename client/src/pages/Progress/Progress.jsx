import './Progress.css'

function Progress() {
  const subjects = [
    {
      name: 'Mathematics',
      progress: 70,
      completed: '7 / 10 lessons',
    },
    {
      name: 'Science',
      progress: 40,
      completed: '4 / 10 lessons',
    },
  ]

  const recentActivity = [
    'Completed Introduction to Algebra',
    'Completed Science Fundamentals',
    'Completed Mathematics Quiz',
  ]

  return (
    <main className="progress-page">

      {/* Header */}
      <section className="progress-header">
        <p className="progress-label">YOUR PROGRESS</p>

        <h1>See how far you've come. 📈</h1>

        <p>
          Track your learning progress and celebrate your achievements.
        </p>
      </section>


      {/* Overall Progress */}
      <section className="overall-progress-card">

        <div className="overall-progress-content">
          <span>Overall Progress</span>
          <strong>65%</strong>
          <p>You're making great progress. Keep going!</p>
        </div>

        <div className="large-progress-bar">
          <div
            className="large-progress-fill"
            style={{ width: '65%' }}
          ></div>
        </div>

      </section>


      {/* Stats */}
      <section className="progress-stats">

        <div className="progress-stat-card">
          <div className="progress-stat-icon">📚</div>
          <span>Lessons Completed</span>
          <strong>12</strong>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">🎯</div>
          <span>Quizzes Completed</span>
          <strong>5</strong>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">📝</div>
          <span>Assignments Completed</span>
          <strong>3</strong>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">🔥</div>
          <span>Current Streak</span>
          <strong>4 Days</strong>
        </div>

      </section>


      {/* Subject Progress */}
      <section className="progress-section">

        <div className="section-heading">
          <h2>Subject Progress</h2>
          <p>Track your progress in each subject.</p>
        </div>

        <div className="subject-progress-list">

          {subjects.map((subject) => (
            <div
              className="subject-progress-row"
              key={subject.name}
            >

              <div className="subject-progress-info">
                <h3>{subject.name}</h3>
                <span>{subject.completed}</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-track-fill"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>

              <strong className="subject-percentage">
                {subject.progress}%
              </strong>

            </div>
          ))}

        </div>

      </section>


      {/* Recent Activity */}
      <section className="progress-section">

        <div className="section-heading">
          <h2>Recent Activity</h2>
          <p>Your latest learning achievements.</p>
        </div>

        <div className="activity-list">

          {recentActivity.map((activity, index) => (
            <div
              className="activity-item"
              key={index}
            >
              <div className="activity-check">
                ✓
              </div>

              <span>{activity}</span>

              <span className="activity-status">
                Completed
              </span>
            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Progress