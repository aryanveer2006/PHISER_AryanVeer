import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({});

  // Fetch profile data
  useEffect(() => {
    axios.get("/users/profile")
      .then((res) => {
        setUser(res.data);
        setForm(res.data);
      })
      .catch(() => {
        alert("Failed to load profile");
      });
  }, []);

  // Handle update
  const handleUpdate = async () => {
    try {
      await axios.put("/users/profile", form);
      alert("Profile updated ✅");
    } catch {
      alert("Update failed ❌");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">My Profile 👤</h1>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl">
          
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              className="w-full p-2 border rounded"
              value={form.name || ""}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              className="w-full p-2 border rounded"
              value={form.email || ""}
              disabled
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Role</label>
            <input
              className="w-full p-2 border rounded"
              value={form.role || ""}
              disabled
            />
          </div>

          {/* Followers (Influencer only) */}
          {form.role === "influencer" && (
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Followers</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={form.followers || ""}
                onChange={(e) =>
                  setForm({ ...form, followers: e.target.value })
                }
              />
            </div>
          )}

          {/* Company (Brand only) */}
          {form.role === "brand" && (
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Company Name</label>
              <input
                className="w-full p-2 border rounded"
                value={form.company || ""}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
              />
            </div>
          )}

          {/* Bio */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Bio</label>
            <textarea
              className="w-full p-2 border rounded"
              value={form.bio || ""}
              onChange={(e) =>
                setForm({ ...form, bio: e.target.value })
              }
            />
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}