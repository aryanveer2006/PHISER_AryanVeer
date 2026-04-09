import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">
            Welcome to PHISER_AryanVeer 👋
          </h1>
        </div>
      </div>
    </div>
  );
}