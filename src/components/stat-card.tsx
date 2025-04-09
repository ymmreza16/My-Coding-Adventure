import { JSX } from "react";

export function StatCard({ icon, title, value, color }: { icon: JSX.Element, title: string, value: string, color: string }) {
    return (
      <div className={`bg-white border border-${color}-100 shadow rounded-2xl p-4 flex items-center space-x-4`}>
        <div className={`text-${color}-600 bg-${color}-50 p-3 rounded-xl text-xl`}>
          {icon}
        </div>
        <div className="text-right flex-1">
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
      </div>
    )
  }
  