import './Subjects.css'

function Subjects() {
  const subjects = [
    {
      icon: '🔢',
      title: 'Mathematics',
      description: 'Build strong foundations through simple explanations and practice.',
    },
    {
      icon: '🔬',
      title: 'Science',
      description: 'Explore science concepts through engaging and easy-to-understand lessons.',
    },
    {
      icon: '📖',
      title: 'English',
      description: 'Improve reading, vocabulary, grammar, and communication skills.',
    },
    {
      icon: '💻',
      title: 'Computer Science',
      description: 'Learn technology and computing concepts step by step.',
    },
  ]

  return (
    <main className="subjects-page">

      <section className="subjects-hero">

        <div className="subjects-badge">
          📚 LEARNREACH SUBJECTS
        </div>

        <h1>
          Learn something new,
          <span> every day.</span>
        </h1>

        <p>
          Explore subjects, discover new topics, and learn at your own pace.
        </p>

      </section>


      <section className="subjects-section">

        <div className="subjects-heading">
          <h2>Choose your subject.</h2>

          <p>
            Start with a subject that interests you and begin your learning journey.
          </p>
        </div>


        <div className="subjects-grid">

          {subjects.map((subject) => (
            <div className="subject-card" key={subject.title}>

              <div className="subject-icon">
                {subject.icon}
              </div>

              <h3>{subject.title}</h3>

              <p>{subject.description}</p>

              <button className="explore-btn">
                Explore →
              </button>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Subjects