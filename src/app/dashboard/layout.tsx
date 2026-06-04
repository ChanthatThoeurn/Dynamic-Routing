import { AsideComponentDashboard } from "@/src/components/asideComponentDasboad/AsideComponentDasboad";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-4 min-h-screen">
      {/* Sidebar — sticky, full height */}
      <aside className="col-span-1 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-white/10">
        <AsideComponentDashboard />
      </aside>

      {/* Main content — scrollable */}
      <div className="col-span-3 min-h-screen overflow-y-auto p-6">
        {children}
        {products}
        {blogs}
        {setting}
      </div>
    </section>
  );
}