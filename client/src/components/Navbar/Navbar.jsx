import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="brand">
        <span className="brand-icon">🌱</span>
        <span>LearnReach</span>
      </Link>

      <nav className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'active' : 'nav-link'}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'active' : 'nav-link'}
        >
          About
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) => isActive ? 'active' : 'nav-link'}
        >
          Features
        </NavLink>

        <NavLink
          to="/subjects"
          className={({ isActive }) => isActive ? 'active' : 'nav-link'}
        >
          Subjects
        </NavLink>

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