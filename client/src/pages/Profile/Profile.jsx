import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <main className="profile-page">
      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h1>{user?.name || 'Student'}</h1>
          <p>{user?.email || 'student@email.com'}</p>
          <span className="profile-grade">Grade {user?.grade || 'N/A'}</span>
        </div>

        <div className="profile-section">
          <h2>Account</h2>

          <div className="profile-actions">
            <button className="profile-action-button" onClick={() => navigate('/dashboard/profile/edit')}>
              <span>✏️</span>
              <span>Edit Profile</span>
              <span className="action-arrow">→</span>
            </button>

            <button className="profile-action-button" onClick={() => navigate('/dashboard/profile/password')}>
              <span>🔒</span>
              <span>Change Password</span>
              <span className="action-arrow">→</span>
            </button>

            <button className="profile-action-button logout-button" onClick={handleLogout}>
              <span>↪️</span>
              <span>Log Out</span>
              <span className="action-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile