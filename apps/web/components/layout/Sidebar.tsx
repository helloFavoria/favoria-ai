"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/dashboard/affiliate", label: "Affiliate" },
  { href: "/dashboard/analytics", label: "Insights" },
];

export default function Sidebar({
  isOpen,
  onClose,
  isDark,
}: {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-72 border-r p-6 transition-transform duration-200 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isDark ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-200 bg-white text-slate-900"}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Favoria
          </p>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-sm lg:hidden"
        >
          ✕
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center rounded-xl px-3 py-2 text-sm font-medium transition ${
                active
                  ? isDark
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-900"
                  : isDark
                    ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
