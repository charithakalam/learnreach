import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Features from './pages/Features/Features'
import Subjects from './pages/Subjects/Subjects'
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
      </Routes>
    </div>
  )
}

export default App