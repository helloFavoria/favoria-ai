import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "@/app/logout/actions";
import { createClient } from "@/lib/supabase/server";

const cards = [
  { title: "Products", value: "0", hint: "Drafts and live" },
  { title: "Clicks", value: "0", hint: "This week" },
  { title: "Collections", value: "0", hint: "Curated groups" },
  { title: "Marketplaces", value: "0", hint: "Connected sources" },
];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">{user.email}</p>
        </div>

        <form action={logout}>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Logout
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{card.title}</p>
            <p className="mt-3 text-4xl font-semibold">{card.value}</p>
            <p className="mt-2 text-sm text-slate-400">{card.hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Recent activity</h2>
              <p className="mt-1 text-sm text-slate-500">
                Your next best moves are ready.
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
              Live preview
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Create your first product",
              "Review affiliate placements",
              "Publish a new collection",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"
              >
                <span>{item}</span>
                <span className="text-slate-400">Soon</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-slate-600">
            The dashboard shell is now in place. Continue into product
            management when ready.
          </p>
          <Link
            href="/dashboard/products"
            className="mt-4 inline-flex text-sm font-medium text-slate-900 underline"
          >
            Continue to products
          </Link>
        </section>
      </div>
    </div>
  );
}
