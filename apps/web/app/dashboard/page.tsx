"use client";

import { supabase } from "@/lib/supabase/client";

export default function DashboardPage() {
  async function logout() {
    await supabase.auth.signOut();
    location.href = "/login";
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-2xl border p-10 text-center">
        <h1 className="text-3xl font-bold">
          🎉 Dashboard Favoria AI
        </h1>

        <p className="mt-4">
          Login berhasil.
        </p>

        <button
          onClick={logout}
          className="mt-8 rounded-lg bg-black px-6 py-3 text-white"
        >
          Logout
        </button>
      </div>
    </main>
  );
}