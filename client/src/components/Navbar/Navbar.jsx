import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  // Temporary frontend logic.
  // Later this will be replaced with real authentication state.
  const isStudent = location.pathname.startsWith('/dashboard')

  return (
    <header className="navbar">

      <Link to={isStudent ? '/dashboard' : '/'} className="brand">
        <span className="brand-icon">🌱</span>
        <span>LearnReach</span>
      </Link>

      {isStudent ? (

        /* Student Navbar */
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
              <span>Student</span>
            </Link>

          </div>
        </>

      ) : (

        /* Public Navbar */
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