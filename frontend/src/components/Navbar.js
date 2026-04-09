import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-indigo-600 p-4 text-white flex justify-between">
      <h1 className="font-bold">Collabify</h1>
      <div>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/campaigns">Campaigns</Link>
      </div>
    </div>
  );
}