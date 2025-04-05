
/*
  ساختار پیشنهادی پروژه:
  - src/
    - assets/
      - logo.png
    - components/
      - AuthForm.tsx
    - pages/
      - Login.tsx
      - Home.tsx
    - App.tsx
    - main.tsx
    - index.css (شامل فونت و tailwind)
*/

// فایل App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

