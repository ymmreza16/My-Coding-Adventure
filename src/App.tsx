import { useState } from 'react'

function App() {
  // وضعیت برای ذخیره یوزرنیم و پسورد
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  // تابع برای بررسی اطلاعات لاگین
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault() // جلوگیری از رفرش صفحه
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true) // اگر درست بود، وارد می‌شود
    } else {
      alert('اطلاعات اشتباه است') // در غیر این صورت پیغام اشتباه می‌دهیم
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      {loggedIn ? (
        <h1 className="text-3xl text-white">خوش آمدید!</h1> // نمایش خوش‌آمدگویی بعد از لاگین
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl text-center text-blue-600 mb-6">صفحه ورود</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                یوزرنیم
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 w-full border border-gray-300 rounded-md"
                placeholder="یوزرنیم خود را وارد کنید"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                پسورد
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full border border-gray-300 rounded-md"
                placeholder="پسورد خود را وارد کنید"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
            >
              ورود
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
