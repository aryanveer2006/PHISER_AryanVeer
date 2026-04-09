import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="h-screen w-64 bg-indigo-600 text-white fixed left-0 top-0 p-5">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-8">Collabify 🚀</h1>

      {/* Menu */}
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              to={item.path}
              className={`block p-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-white text-indigo-600 font-semibold"
                  : "hover:bg-indigo-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom Section */}
      <div className="absolute bottom-5 left-5 right-5">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="w-full bg-red-500 p-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}