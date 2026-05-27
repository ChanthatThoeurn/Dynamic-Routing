import { AsideComponentDashboard } from "@/src/components/asideComponentDasboad/AsideComponentDasboad";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
  <section className="grid grid-cols-4 gap-4 h-screen">
    <AsideComponentDashboard />
    <div className="col-span-3">
      {children}
      {products}
      {blogs}
      {setting}
    </div>
  </section>
    
  );
}