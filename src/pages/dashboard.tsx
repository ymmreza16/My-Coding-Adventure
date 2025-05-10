// src/pages/Dashboard.tsx

import { useState } from "react";
import {
  CalendarCheck,
  AlertCircle,
  Star,
  Heart,
  ShoppingBag,
  CreditCard,
  User,
  Home,
} from "lucide-react";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "favorites":
        return (
          <div dir="rtl" className="flex items-center gap-2 text-lg font-bold">
            <Heart size={20} />
            <span>لیست علاقمندی‌های من</span>
          </div>
        );
      case "orders":
        return (
          <div className="flex items-center gap-2 text-lg font-bold">
            <ShoppingBag size={20} />
            <span>خریدهای من</span>
          </div>
        );
      case "payments":
        return (
          <div className="flex items-center gap-2 text-lg font-bold">
            <CreditCard size={20} />
            <span>اقساط قابل پرداخت</span>
          </div>
        );
      case "profile":
        return (
          <div className="flex items-center gap-2 text-lg font-bold">
            <User size={20} />
            <span>اطلاعات کاربری</span>
          </div>
        );
      default:
        return (
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Home size={24} />
              <span>خوش آمدید</span>
            </div>
            <p className="text-gray-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </div>
        );
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-6 p-6 flex-grow">
        {/* CTA Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <CalendarCheck size={36} />,
              title: "آخرین سفارش",
              text: "اطلاعات آخرین سفارش ثبت‌شده",
            },
            {
              icon: <AlertCircle size={36} />,
              title: "اعلان‌ها",
              text: "۳ اعلان خوانده‌نشده دارید",
            },
            {
              icon: <Star size={36} />,
              title: "امتیاز شما",
              text: "۵ ستاره از ۵",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-md flex flex-col items-end gap-3"
            >
              <div className="flex flex-row-reverse items-center gap-3 text-blue-600 w-full">
                {item.icon}
                <h3 className="font-bold text-xl sm:text-2xl">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 text-right w-full">
                {item.text}
              </p>
              <button className="text-sm text-blue-600 hover:underline self-start">
                مشاهده صفحه
              </button>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="flex flex-grow gap-6">
          {/* Sidebar */}
          <aside className="bg-white border shadow-lg rounded-2xl p-4 w-60 flex flex-col justify-between">
            <nav className="space-y-2">
              {[
                {
                  key: "favorites",
                  icon: <Heart size={20} />,
                  title: "لیست علاقمندی من",
                },
                {
                  key: "orders",
                  icon: <ShoppingBag size={20} />,
                  title: "خریدهای من",
                },
                {
                  key: "payments",
                  icon: <CreditCard size={20} />,
                  title: "اقساط قابل پرداخت",
                },
                {
                  key: "profile",
                  icon: <User size={20} />,
                  title: "اطلاعات کاربری",
                },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(item.key)}
                  className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 p-3 rounded-xl transition w-full justify-end"
                >
                  {item.title}
                  {item.icon}
                </button>
              ))}
            </nav>
            <div className="mt-10 text-sm text-gray-500 leading-6">
              لورم ایپسوم متن ساختگی برای نمایش پیش‌فرض پایین منو.
            </div>
          </aside>

          {/* Main Content */}
          <div className="bg-white p-6 rounded-2xl border shadow-md flex-grow">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}