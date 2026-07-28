import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-2 text-slate-500">Welcome, {user?.email}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border p-6">
          <h2>Total Products</h2>
          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Total Clicks</h2>
          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Collections</h2>
          <p className="mt-3 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Marketplace</h2>
          <p className="mt-3 text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}