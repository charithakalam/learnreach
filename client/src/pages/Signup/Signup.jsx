import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()
  const { signup, login } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [grade, setGrade] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signup({
        name,
        email,
        password,
        grade: Number(grade),
      })

      await login({ email, password })
      navigate('/dashboard')
    } catch (apiError) {
      setError(apiError.message || 'Unable to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="signup-page">
      <div className="signup-card">

        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Start your learning journey with LearnReach.</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">Grade</label>

            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select your grade</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
            </select>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

        </form>

        <p className="signup-footer">
          Already have an account?{' '}
          <Link to="/login">Log In</Link>
        </p>

      </div>
    </main>
  )
}

export default Signup