import { Heart, ShoppingBag, CreditCard, User } from 'lucide-react'

const menu = [
  { key: 'favorites', icon: <Heart size={24} />, title: 'لیست علاقمندی من' },
  { key: 'orders', icon: <ShoppingBag size={24} />, title: 'خریدهای من' },
  { key: 'payments', icon: <CreditCard size={24} />, title: 'اقساط قابل پرداخت' },
  { key: 'profile', icon: <User size={24} />, title: 'اطلاعات کاربری' },
]

export default function Sidebar({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  return (
    <aside className="bg-white/80 border shadow-lg rounded-2xl p-4 min-h-[700px] flex flex-col justify-between">
      <nav className="space-y-2">
        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(item.key)}
            className="flex items-center gap-3 text-gray-700 hover:bg-blue-50 p-3 rounded-xl transition w-full text-right"
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
      <div className="mt-10 text-sm text-gray-500 leading-6">
        لورم ایپسوم متن ساختگی برای نمایش پیش‌فرض پایین منو.
      </div>
    </aside>
  )
}
