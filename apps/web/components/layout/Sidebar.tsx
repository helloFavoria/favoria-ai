export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-6">
      <h1 className="text-2xl font-bold">
        Favoria
      </h1>

      <nav className="mt-8 space-y-4">
        <a href="/dashboard" className="block">
          Dashboard
        </a>

        <a href="/dashboard/products" className="block">
          Products
        </a>

        <a href="/dashboard/affiliate" className="block">
          Affiliate
        </a>

        <a href="/dashboard/analytics" className="block">
          Analytics
        </a>
      </nav>
    </aside>
  );
}
