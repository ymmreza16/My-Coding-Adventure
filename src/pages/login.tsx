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
      console.log('ثبت‌نام با موفقیت انجام شد:', email)
    } else {
      const defaultEmail = 'example@example.com'
      const defaultPassword = 'password123'
      if (email === defaultEmail && password === defaultPassword) {
        console.log('ورود موفقیت‌آمیز')
      } else {
        alert('ایمیل یا رمز اشتباه است.')
      }
    }

    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        {/* لوگو */}
        <div className="flex justify-center mb-6">
          <img src="/src/assets/react.svg" alt="Logo" className="h-12" />
        </div>

        {/* عنوان */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isRegister ? 'ساخت حساب جدید' : 'ورود به حساب'}
        </h2>

        {/* فرم */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="ایمیل"
            className="w-full p-3 border border-gray-300 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-800 font-medium"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full p-3 border border-gray-300 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-800 font-medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegister && (
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="w-full p-3 border border-gray-300 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 text-gray-800 font-medium"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button
            type="submit"
            className={`w-full ${
              isRegister ? 'bg-blue-600' : 'bg-green-600'
            } text-white py-3 rounded-xl hover:opacity-90 transition-all font-semibold shadow-sm`}
          >
            {isRegister ? 'ثبت‌نام' : 'ورود'}
          </button>
        </form>

        {/* دکمه تغییر حالت */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
          <span>{isRegister ? 'حساب دارید؟' : 'حساب ندارید؟'}</span>
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all border border-blue-200 shadow-sm"
          >
            {isRegister ? 'وارد شوید' : 'ثبت‌نام کنید'}
          </button>
        </div>
      </div>
    </div>
  )
}