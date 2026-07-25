export default function DashboardPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="rounded-xl border p-6">
          <h2>Total Products</h2>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Total Clicks</h2>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Collections</h2>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2>Marketplace</h2>
          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>

      </div>

    </div>
  );
}