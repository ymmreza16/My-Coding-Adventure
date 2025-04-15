// Project: react-ts-tailwindcss
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import CounterTheme from './pages/CounterTheme'
import './index.css'
import Home from './pages/home'
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/CounterTheme" element={<CounterTheme />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App