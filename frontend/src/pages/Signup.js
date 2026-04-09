import { useState } from "react";
import { signupUser } from "../api/authApi";

export default function Signup() {
  const [form, setForm] = useState({});

  const handleSignup = async () => {
    await signupUser(form);
    alert("Account Created ✅");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 shadow rounded-xl">
        <h2 className="mb-4 text-xl">Signup</h2>

        <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <input placeholder="Role (brand/influencer)" onChange={(e) => setForm({...form, role: e.target.value})} />

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}