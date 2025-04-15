type DashboardLayoutProps = {
    setActiveSection: React.Dispatch<React.SetStateAction<"home" | "favorites" | "orders" | "payments" | "profile">>;
    children: React.ReactNode;
  };
  
  export default function DashboardLayout({ setActiveSection, children }: DashboardLayoutProps) {
    return (
      <div>
        {/* Example usage */}
        <button onClick={() => setActiveSection("home")}>Home</button>
        <button onClick={() => setActiveSection("favorites")}>Favorites</button>
        <button onClick={() => setActiveSection("orders")}>Orders</button>
        <button onClick={() => setActiveSection("payments")}>Payments</button>
        <button onClick={() => setActiveSection("profile")}>Profile</button>
        <div>{children}</div>
      </div>
    );
  }