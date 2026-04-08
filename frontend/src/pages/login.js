import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await axios.post("http://127.0.0.1:8000/register", {
      name: "Test",
      email: email,
      password: "1234",
      role: "influencer"
    });
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;