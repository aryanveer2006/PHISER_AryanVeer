import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import axios from "../api/axios";
import { getCurrentUser } from "../utils/helpers";

export default function Dashboard() {
  const [profile, setProfile] = useState({});
  const user = getCurrentUser();

  // Fetch user profile
  useEffect(() => {
    axios.get("/users/profile")
      .then((res) => setProfile(res.data))
      .catch(() => console.log("Error fetching profile"));
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {profile.name || "User"} 👋
        </h1>
        <p className="text-gray-600 mb-6">
          Role: {profile.role || user?.role}
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card title="Active Campaigns">
            <p className="text-xl font-bold">12</p>
          </Card>

          <Card title="Applications">
            <p className="text-xl font-bold">5</p>
          </Card>

          <Card title="Earnings">
            <p className="text-xl font-bold">₹10,000</p>
          </Card>
        </div>

        {/* Influencer Section */}
        {(profile.role === "influencer" || user?.role === "influencer") && (
          <div className="bg-white p-6 rounded-2xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">Your Growth 📈</h2>
            <p>Followers: {profile.followers || 0}</p>
            <p>Engagement Rate: 5.2%</p>
          </div>
        )}

        {/* Brand Section */}
        {(profile.role === "brand" || user?.role === "brand") && (
          <div className="bg-white p-6 rounded-2xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">Your Campaigns 📢</h2>
            <p>Total Campaigns: 8</p>
            <p>Budget Spent: ₹50,000</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions ⚡</h2>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Create Campaign
            </button>

            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Explore Influencers
            </button>

            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              View Applications
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}