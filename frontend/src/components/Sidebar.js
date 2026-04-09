import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-600 text-white fixed p-5">
      <h1 className="text-2xl font-bold mb-8">
        PHISER_AryanVeer 🚀
      </h1>

      <ul>
        <li className="mb-4">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/campaigns">Campaigns</Link>
        </li>
      </ul>
    </div>
  );
}