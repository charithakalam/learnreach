import Hero from '../../components/Hero/Hero'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import './Home.css'

function Home() {
  return (
    <main>

      <Hero />

      <section className="feature-cards" id="features">

        <FeatureCard
          icon="📖"
          title="Multiple Subjects"
          description="Math • Science • English & more"
          iconClass="green-icon"
        />

        <FeatureCard
          icon="📶"
          title="Low Internet Friendly"
          description="Works on slow networks"
          iconClass="orange-icon"
        />

        <FeatureCard
          icon="🌐"
          title="Local Languages"
          description="Learn in your language"
          iconClass="blue-icon"
        />

        <FeatureCard
          icon="👨‍👩‍👧"
          title="For Rural Learners"
          description="Built for every community"
          iconClass="yellow-icon"
        />

      </section>

    </main>
  )
}

export default Home