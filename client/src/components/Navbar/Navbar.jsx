import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-icon">🌱</span>
        <span>LearnReach</span>
      </div>

      <nav className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#subjects">Subjects</a>
      </nav>

      <div className="nav-actions">
        <select className="language-select" defaultValue="en">
          <option value="en">🌐 English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
        </select>

        <button className="login-btn">
          👤 Login
        </button>
      </div>
    </header>
  )
}

export default Navbar