import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { isAuthenticated } from "../utils/helpers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔐 Auto redirect if already logged in
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // 🚀 Handle Login
  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });

      // Save token
      login(res.data.access_token);

      alert("Login Successful 🚀");
      navigate("/dashboard");

    } catch (error) {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to Collabify 🚀
        </h2>

        {/* Email */}
        <input
          type="email"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}