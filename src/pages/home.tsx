import { FaUsers, FaChartLine, FaMoneyBill, FaBell } from 'react-icons/fa';
import { StatCard } from '../components/stat-card'; 
import { Button } from '../components/buttons'; 
import { Input } from '../components/inputs'; 

export default function Home() {
  const stats = {
    visits: 1234,
    users: 89,
    revenue: 240000,
    notifications: 3,
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">به داشبورد خوش آمدید</h1>
          <p className="text-gray-600">آخرین وضعیت عملکرد سایت شما</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<FaChartLine />} title="بازدید امروز" value={stats.visits.toLocaleString()} color="blue" />
          <StatCard icon={<FaUsers />} title="کاربران فعال" value={stats.users.toString()} color="green" />
          <StatCard icon={<FaMoneyBill />} title="درآمد امروز" value={stats.revenue.toLocaleString() + " تومان"} color="purple" />
          <StatCard icon={<FaBell />} title="اعلان‌ها" value={stats.notifications.toString()} color="red" />
        </section>

        <Button onClick={() => alert('Button clicked')}>کلیک کنید</Button>
        <Input type="text" placeholder="جستجو..." />

        <section className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">اعلان‌ها</h2>
          <ul className="list-disc pr-6 text-gray-600 space-y-1 text-sm leading-relaxed">
            <li>نسخه جدید افزونه شما آماده شده است.</li>
            <li>۵ کاربر جدید امروز ثبت‌نام کرده‌اند.</li>
            <li>ترافیک امروز نسبت به دیروز ۱۲٪ افزایش داشته است.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
