import Sidebar from "./Sidebar" // Ensure Sidebar.tsx or Sidebar/index.tsx exists in the same directory
import CTAHeader from "./CTAHeader"

export default function DashboardLayout({
  children,
  setActiveSection,
}: {
  children: React.ReactNode
  setActiveSection: (section: string) => void
}) {
  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-screen-lg mx-auto space-y-6">
        <CTAHeader />
        <div className="grid grid-cols-[1fr_3fr] gap-6">
          <Sidebar setActiveSection={setActiveSection} />
          <div className="bg-white/90 p-6 rounded-2xl border shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
// Compare this snippet from src/dashboard/CTAHeader.tsx: