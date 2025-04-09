import { useEffect, useState } from 'react'

export default function CounterTheme() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-500">
      <h1>شمارنده + تغییر تم</h1>

      <div>
        <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
        <span className="counter">{count}</span>
        <button className="increment" onClick={() => setCount(count + 1)}>+</button>
      </div>

      <button className="reset" onClick={() => setCount(0)}>ریست</button>
      <button className="toggle-theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        تغییر تم به {theme === 'dark' ? 'روشن' : 'تاریک'}
      </button>
    </div>
  )
}
