import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ChangePassword.css'

function ChangePassword() {
  const navigate = useNavigate()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.')
      setMessage('')
      return
    }

    setError('')
    setMessage('Password changes are not supported by the current backend API. Please update the password from the backend service or API route when available.')
  }

  return (
    <main className="change-password-page">
      <section className="change-password-card">
        <div className="change-password-header">
          <h1>Change Password</h1>
          <p>Keep your account secure with a strong password.</p>
        </div>

        <form className="change-password-form" onSubmit={handleSubmit}>
          <div className="password-form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input id="currentPassword" type="password" placeholder="Enter your current password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          </div>

          <div className="password-form-group">
            <label htmlFor="newPassword">New Password</label>
            <input id="newPassword" type="password" placeholder="Enter your new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>

          <div className="password-form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input id="confirmPassword" type="password" placeholder="Confirm your new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {error && <p className="password-error">{error}</p>}
          </div>

          {message && <p className="status-banner info">{message}</p>}

          <div className="change-password-actions">
            <button type="button" className="cancel-password-button" onClick={() => navigate('/dashboard/profile')}>
              Cancel
            </button>

            <button type="submit" className="change-password-button">
              Change Password
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ChangePassword