import './FeatureCard.css'

function FeatureCard({ icon, title, description, iconClass }) {
  return (
    <div className="feature-card">

      <div className={`feature-icon ${iconClass}`}>
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default FeatureCard