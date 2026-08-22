import FeatureCard from '../../components/FeatureCard/FeatureCard'
import './Features.css'

function Features() {
  return (
    <main className="features-page">

      {/* Hero */}
      <section className="features-hero">

        <span className="features-label">
          ✨ LEARNREACH FEATURES
        </span>

        <h1>
          Everything you need to
          <span> learn and grow.</span>
        </h1>

        <p>
          Simple, accessible learning tools designed to help
          every student learn at their own pace.
        </p>

      </section>


      {/* Main Features */}
      <section className="features-section">

        <div className="features-heading">
          <span>LEARN YOUR WAY</span>

          <h2>
            Learning made simple.
          </h2>

          <p>
            Explore the tools that make LearnReach a complete
            learning experience.
          </p>
        </div>


        <div className="features-grid">

          <FeatureCard
            icon="📚"
            title="Subjects & Topics"
            description="Explore subjects, topics, and learning content in one place."
            iconClass="green-icon"
          />

          <FeatureCard
            icon="📝"
            title="Interactive Quizzes"
            description="Practice what you learn with simple and engaging quizzes."
            iconClass="orange-icon"
          />

          <FeatureCard
            icon="📋"
            title="Assignments"
            description="Complete assignments and practice your understanding."
            iconClass="blue-icon"
          />

          <FeatureCard
            icon="📊"
            title="Progress Tracking"
            description="See your learning progress and understand what you have completed."
            iconClass="yellow-icon"
          />

          <FeatureCard
            icon="🌐"
            title="Multiple Languages"
            description="Learn through a language that is comfortable and familiar to you."
            iconClass="green-icon"
          />

          <FeatureCard
            icon="🔊"
            title="Audio Learning"
            description="Listen to learning content and make lessons more accessible."
            iconClass="orange-icon"
          />

          <FeatureCard
            icon="📶"
            title="Low Internet Friendly"
            description="Designed to remain useful even when internet connectivity is limited."
            iconClass="blue-icon"
          />

          <FeatureCard
            icon="🌱"
            title="Learn at Your Pace"
            description="Continue learning at a pace that works best for you."
            iconClass="yellow-icon"
          />

        </div>

      </section>


      {/* CTA */}
      <section className="features-cta">

        <div>
          <h2>
            Ready to start learning?
          </h2>

          <p>
            Take your first step with LearnReach today.
          </p>
        </div>

        <button>
          Start Learning →
        </button>

      </section>

    </main>
  )
}

export default Features