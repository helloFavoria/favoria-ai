import Link from "next/link";
import { createProduct } from "@/app/dashboard/products/actions";

export default function NewProductPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
              <h1 className="text-3xl font-semibold text-slate-900">Add Product</h1>
            </div>

            <Link
              href="/dashboard/products"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Cancel
            </Link>
          </div>

          <form action={createProduct} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                  Product Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="Enter product title"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-slate-700">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  required
                  placeholder="Rp 0"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="marketplace_id" className="block text-sm font-medium text-slate-700">
                  Marketplace
                </label>
                <input
                  id="marketplace_id"
                  name="marketplace_id"
                  type="text"
                  required
                  placeholder="e.g. Tokopedia"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="affiliate_url" className="block text-sm font-medium text-slate-700">
                  Affiliate URL
                </label>
                <input
                  id="affiliate_url"
                  name="affiliate_url"
                  type="url"
                  required
                  placeholder="https://"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="image_url" className="block text-sm font-medium text-slate-700">
                  Image URL
                </label>
                <input
                  id="image_url"
                  name="image_url"
                  type="url"
                  required
                  placeholder="https://"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  placeholder="Write a short description"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-black focus:bg-white focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Link
                href="/dashboard/products"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
