import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

  const isStudent = isAuthenticated || location.pathname.startsWith('/dashboard')
  const studentName = user?.name || 'Student'

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="navbar">

      <Link to={isStudent ? '/dashboard' : '/'} className="brand">
        <span className="brand-icon">🌱</span>
        <span>LearnReach</span>
      </Link>

      {isStudent ? (
        <>
          <nav className="nav-links">

            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/learning"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              My Learning
            </NavLink>

            <NavLink
              to="/dashboard/subjects"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              Subjects
            </NavLink>

            <NavLink
              to="/dashboard/progress"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              Progress
            </NavLink>

          </nav>

          <div className="nav-actions">

            <select className="language-select" defaultValue="en">
              <option value="en">🌐 English</option>
              <option value="te">తెలుగు</option>
              <option value="hi">हिन्दी</option>
            </select>

            <Link to="/dashboard/profile" className="student-profile">
              <span className="student-avatar">👤</span>
              <span>{studentName}</span>
            </Link>

            <button type="button" className="login-btn" onClick={handleLogout}>
              Log Out
            </button>

          </div>
        </>

      ) : (
        <>
          <nav className="nav-links">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              About
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/subjects"
              className={({ isActive }) =>
                isActive ? 'active' : 'nav-link'
              }
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

            <Link to="/login" className="login-btn">
              👤 Login
            </Link>

          </div>
        </>
      )}

    </header>
  )
}

export default Navbar