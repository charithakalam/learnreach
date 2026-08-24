import { Link } from 'react-router-dom'
import './StudentSubjects.css'

function StudentSubjects() {
  const subjects = [
    {
      name: 'Mathematics',
      icon: '🔢',
      topics: 5,
      progress: 60,
      description: 'Algebra, Fractions and more'
    },
    {
      name: 'Science',
      icon: '🔬',
      topics: 5,
      progress: 40,
      description: 'Explore the world around you'
    }
  ]

  return (
    <main className="student-subjects-page">

      <section className="student-subjects-header">
        <p className="student-subjects-label">MY SUBJECTS</p>

        <h1>What do you want to learn today?</h1>

        <p>
          Choose a subject and continue your learning journey.
        </p>
      </section>


      <section className="student-subjects-grid">

        {subjects.map((subject) => (
          <div
            className="student-subject-card"
            key={subject.name}
          >

            <div className="student-subject-icon">
              {subject.icon}
            </div>

            <div className="student-subject-content">

              <h2>{subject.name}</h2>

              <p>{subject.description}</p>

              <div className="subject-meta">
                <span>{subject.topics} Topics</span>
                <span>{subject.progress}% completed</span>
              </div>

              <div className="subject-progress-bar">
                <div
                  className="subject-progress-fill"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>

              <Link
                to="/dashboard/subjects"
                className="subject-view-button"
              >
                View Subject →
              </Link>

            </div>

          </div>
        ))}

      </section>

    </main>
  )
}

export default StudentSubjects