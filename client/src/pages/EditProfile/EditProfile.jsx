import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

function EditProfile() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Temporary frontend-only action.
    // Real profile update will be connected to the backend later.
    navigate('/dashboard/profile')
  }

  return (
    <main className="edit-profile-page">

      <section className="edit-profile-card">

        <div className="edit-profile-header">
          <h1>Edit Profile</h1>
          <p>Update your personal information.</p>
        </div>

        <form
          className="edit-profile-form"
          onSubmit={handleSubmit}
        >

          <div className="edit-form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              defaultValue="Student"
              placeholder="Enter your name"
              required
            />
          </div>


          <div className="edit-form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              defaultValue="student@email.com"
              placeholder="Enter your email"
              required
            />
          </div>


          <div className="edit-form-group">
            <label htmlFor="grade">Grade</label>

            <select
              id="grade"
              defaultValue="8"
              required
            >
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
            </select>
          </div>


          <div className="edit-profile-actions">

            <button
              type="button"
              className="cancel-profile-button"
              onClick={() => navigate('/dashboard/profile')}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-profile-button"
            >
              Save Changes
            </button>

          </div>

        </form>

      </section>

    </main>
  )
}

export default EditProfile