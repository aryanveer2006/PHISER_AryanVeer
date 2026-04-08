export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard 🚀</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-xl">Campaigns</div>
        <div className="p-4 bg-white shadow rounded-xl">Applications</div>
        <div className="p-4 bg-white shadow rounded-xl">Earnings</div>
      </div>
    </div>
  );
}