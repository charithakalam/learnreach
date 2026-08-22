import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* About Hero */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-label">
            🌱 ABOUT LEARNREACH
          </span>

          <h1>
            Education
            <br />
            without
            <span> boundaries.</span>
          </h1>

          <p>
            LearnReach is a simple and effective learning platform
            that makes quality education accessible to every child,
            no matter where they live.
          </p>

        </div>

        <div className="about-hero-visual">
          <div className="about-illustration">
            👧🏻 📱 👦🏻
          </div>
        </div>

      </section>


      {/* Problem Section */}
      <section className="problem-section">

        <div className="problem-visual">
          <div className="problem-circle">
            📚
          </div>
        </div>


        <div className="problem-content">

          <span className="about-section-label">
            THE PROBLEM WE ARE SOLVING
          </span>

          <h2>
            Learning opportunities should not depend on location.
          </h2>

          <p>
            Many students face challenges that prevent them from
            getting quality education.
          </p>

          <ul>

            <li>
              <span>✓</span>
              Poor internet connectivity
            </li>

            <li>
              <span>✓</span>
              Limited access to good learning resources
            </li>

            <li>
              <span>✓</span>
              Language barriers
            </li>

            <li>
              <span>✓</span>
              Lack of personalized practice and feedback
            </li>

          </ul>

          <strong>
            LearnReach is our step towards a better,
            more equal future for every learner.
          </strong>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="cta-logo">
          🌱
        </div>

        <div>
          <h2>
            Ready to begin your learning journey?
          </h2>

          <p>
            Join LearnReach and take the first step today.
          </p>
        </div>

        <button>
          Start Learning Now →
        </button>

      </section>

    </main>
  )
}

export default About