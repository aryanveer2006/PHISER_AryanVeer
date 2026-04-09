// 🔐 Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// 🔓 Remove token (logout helper)
export const removeToken = () => {
  localStorage.removeItem("token");
};

// ✅ Check if user is logged in
export const isAuthenticated = () => {
  return !!getToken();
};

// 🧠 Decode JWT (basic)
export const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (error) {
    return null;
  }
};

// 👤 Get current user from token
export const getCurrentUser = () => {
  const token = getToken();
  if (!token) return null;
  return decodeToken(token);
};

// ⏰ Check if token is expired
export const isTokenExpired = (token) => {
  try {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return true;

    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
};

// 📅 Format date nicely
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// 💰 Format currency (INR)
export const formatCurrency = (amount) => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

// ✂️ Short text (for UI cards)
export const truncateText = (text, maxLength = 100) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
};

// 🎯 Role check helper
export const isBrand = () => {
  const user = getCurrentUser();
  return user?.role === "brand";
};

export const isInfluencer = () => {
  const user = getCurrentUser();
  return user?.role === "influencer";
};