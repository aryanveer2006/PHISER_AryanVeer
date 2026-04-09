import axios from "axios";

const instance = axios.create({
  baseURL: "https://phiser-aryanveer-1.onrender.com", // 🔥 PUT YOUR BACKEND URL HERE
});

// Attach token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;