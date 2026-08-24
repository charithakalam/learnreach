import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Subjects.css'

function Subjects() {
  const navigate = useNavigate()
  const [selectedGrade, setSelectedGrade] = useState(6)

  const subjects = [
    {
      icon: '🔢',
      title: 'Mathematics',
      description:
        'Build strong foundations through simple explanations and practice.',
    },
    {
      icon: '🔬',
      title: 'Science',
      description:
        'Explore science concepts through engaging and easy-to-understand lessons.',
    },
    {
      icon: '📖',
      title: 'English',
      description:
        'Improve reading, vocabulary, grammar, and communication skills.',
    },
    {
      icon: '💻',
      title: 'Computer Science',
      description:
        'Learn technology and computing concepts step by step.',
    },
  ]

  return (
    <main className="subjects-page">

      {/* Hero Section */}
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


      {/* Grade Selection */}
      <section className="grade-section">

        <h2>Choose your grade</h2>

        <p>
          Select your grade to explore the subjects available on LearnReach.
        </p>

        <div className="grade-buttons">

          {[6, 7, 8, 9, 10].map((grade) => (
            <button
              key={grade}
              className={
                selectedGrade === grade
                  ? 'grade-button active'
                  : 'grade-button'
              }
              onClick={() => setSelectedGrade(grade)}
            >
              Grade {grade}
            </button>
          ))}

        </div>

      </section>


      {/* Subjects */}
      <section className="subjects-list">

        <div className="subjects-heading">
          <h2>Subjects for Grade {selectedGrade}</h2>

          <p>
            Explore subjects and begin your learning journey.
          </p>
        </div>


        <div className="subjects-grid">

          {subjects.map((subject) => (
            <div
              className="subject-card"
              key={subject.title}
            >

              <div className="subject-icon">
                {subject.icon}
              </div>

              <div className="subject-content">

                <h3>{subject.title}</h3>

                <p>{subject.description}</p>

                <button
                  className="explore-button"
                  onClick={() => navigate('/login')}
                >
                  Explore →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Subjects