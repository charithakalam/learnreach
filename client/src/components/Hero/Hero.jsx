import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          ❤️ For every learner, everywhere
        </div>

        <h1>
          Learning should
          <span> reach </span>
          every child.
          <span className="sprout">🌱</span>
        </h1>

        <p className="hero-description">
          Quality education, simple learning, and opportunities
          for every student — no matter where they are.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="primary-btn">
            ▶
            <span>Start Learning</span>
            <span>→</span>
          </Link>

          <Link to="/subjects" className="secondary-btn">
            📖
            <span>Explore Subjects</span>
            <span>→</span>
          </Link>
        </div>

      </div>

      <div className="hero-illustration">

        <div className="sun"></div>

        <div className="mountain mountain-one"></div>
        <div className="mountain mountain-two"></div>

        <div className="tree tree-one">🌳</div>
        <div className="tree tree-two">🌳</div>

        <div className="house">
          <div className="roof"></div>

          <div className="house-body">
            <div className="door"></div>
            <div className="window"></div>
          </div>
        </div>

        <div className="learning-group">
          <div className="student student-one">👧</div>
          <div className="student student-two">👦</div>
          <div className="student student-three">👦</div>

          <div className="laptop">
            <div className="laptop-screen">
              🌱
            </div>

            <div className="laptop-base"></div>
          </div>

          <div className="books">
            📚
          </div>
        </div>

        <div className="blackboard">
          <span>Dream</span>
          <span>Learn</span>
          <span>Grow</span>
          <span>Together ❤️</span>
        </div>

      </div>

    </section>
  )
}

export default Hero