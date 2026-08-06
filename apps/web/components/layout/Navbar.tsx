"use client";

export default function Navbar({
  onMenuClick,
  onThemeToggle,
  isDark,
}: {
  onMenuClick: () => void;
  onThemeToggle: () => void;
  isDark: boolean;
}) {
  return (
    <header
      className={`sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4 sm:px-6 ${
        isDark
          ? "border-slate-800 bg-slate-900 text-slate-100"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg border px-3 py-2 text-sm font-medium lg:hidden"
        >
          Menu
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Workspace
          </p>
          <h2 className="text-lg font-semibold">Overview</h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onThemeToggle}
          className={`rounded-lg px-3 py-2 text-sm font-medium ${
            isDark
              ? "bg-slate-800 text-slate-100"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <div className="hidden rounded-full border px-3 py-2 text-sm sm:block">
          New campaign
        </div>
      </div>
    </header>
  );
}
