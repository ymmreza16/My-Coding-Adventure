import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import CounterTheme from './pages/CounterTheme'
import './index.css'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/CounterTheme" element={<CounterTheme />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App