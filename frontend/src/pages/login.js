import { useState } from "react";
import { loginUser } from "../api/authApi";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(form);
    login(data.access_token);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">
          PHISER_AryanVeer Login 🚀
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-indigo-600 text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
}