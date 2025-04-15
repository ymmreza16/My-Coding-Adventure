import { CalendarCheck, AlertCircle, Star } from 'lucide-react'

const cards = [
  { icon: <CalendarCheck size={36} />, title: 'آخرین سفارش', text: 'اطلاعات آخرین سفارش ثبت‌شده' },
  { icon: <AlertCircle size={36} />, title: 'اعلان‌ها', text: '۳ اعلان خوانده‌نشده دارید' },
  { icon: <Star size={36} />, title: 'امتیاز شما', text: '۵ ستاره از ۵' },
]

export default function CTAHeader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
      {cards.map((item, i) => (
        <div key={i} className="bg-white/90 border rounded-2xl p-6 shadow-md flex flex-col items-end gap-3">
          <div className="flex flex-row-reverse items-center gap-3 text-blue-600 w-full">
            {item.icon}
            <h3 className="font-bold text-xl sm:text-2xl">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-600 text-right w-full">{item.text}</p>
          <button className="text-sm text-blue-600 hover:underline self-start">مشاهده صفحه</button>
        </div>
      ))}
    </div>
  )
}
