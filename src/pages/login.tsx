// src/pages/Login.tsx
import { useState } from 'react'

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isRegister) {
      if (password !== confirmPassword) {
        alert('رمز عبور با تکرار آن مطابقت ندارد.')
        return
      }
      // اینجا می‌تونید کد ثبت‌نام را بنویسید
      console.log('ثبت‌نام با موفقیت انجام شد:', email)
    } else {
      // ورود با ایمیل و رمز مشخص
      const defaultEmail = 'example@example.com'
      const defaultPassword = 'password123'
      if (email === defaultEmail && password === defaultPassword) {
        console.log('ورود موفقیت‌آمیز')
      } else {
        alert('ایمیل یا رمز اشتباه است.')
      }
    }

    // پاکسازی فیلدها پس از ارسال
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-10 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex justify-center mb-6">
          <img src="/src/assets/logo.png" alt="Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isRegister ? 'ساخت حساب جدید' : 'ورود به حساب'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="ایمیل"
            className="w-full p-3 border border-gray-400 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full p-3 border border-gray-400 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegister && (
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="w-full p-3 border border-gray-400 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button
            type="submit"
            className={`w-full ${
              isRegister ? 'bg-blue-600' : 'bg-green-600'
            } text-white py-3 rounded-xl hover:opacity-90 transition-all`}
          >
            {isRegister ? 'ثبت‌نام' : 'ورود'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          {isRegister ? 'حساب دارید؟' : 'حساب ندارید؟'}{' '}
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'وارد شوید' : 'ثبت‌نام کنید'}
          </button>
        </p>
      </div>
    </div>
  )
}
