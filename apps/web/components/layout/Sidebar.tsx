import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-6">
      <h1 className="text-2xl font-bold">Favoria</h1>

      <nav className="mt-8 space-y-4">
        <Link href="/dashboard" className="block">
          Dashboard
        </Link>

        <Link href="/dashboard/products" className="block">
          Products
        </Link>

        <Link href="/dashboard/affiliate" className="block">
          Affiliate
        </Link>

        <Link href="/dashboard/analytics" className="block">
          Analytics
        </Link>
      </nav>
    </aside>
  );
}
