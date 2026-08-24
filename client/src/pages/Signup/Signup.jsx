import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [grade, setGrade] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Temporary frontend-only navigation.
    // Backend registration will be connected later.
    navigate('/dashboard')
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
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
            </select>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
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