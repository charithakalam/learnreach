import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Features from './pages/Features/Features'
import Subjects from './pages/Subjects/Subjects'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import MyLearning from './pages/MyLearning/MyLearning'
import StudentSubjects from './pages/StudentSubjects/StudentSubjects'
import Progress from './pages/Progress/Progress'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/EditProfile/EditProfile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/learning" element={<MyLearning />} />
        <Route path="/dashboard/subjects" element={<StudentSubjects />} />
        <Route path="/dashboard/progress" element={<Progress />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/profile/edit" element={<EditProfile />} /> 
        <Route path="/dashboard/profile/password" element={<ChangePassword />} />
      </Routes>
    </div>
  )
}

export default App