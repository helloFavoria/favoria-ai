"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isDark={isDark}
      />

      <div className="lg:pl-72">
        <Navbar
          onMenuClick={() => setSidebarOpen((value) => !value)}
          onThemeToggle={() => setIsDark((value) => !value)}
          isDark={isDark}
        />

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>

      {sidebarOpen ? (
        <div
          className="fixed inset-0 z-20 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}
    </div>
  );
}
