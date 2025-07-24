import logo from "../../assets/Logo.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { DataLinks } from "./Links";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-fit bg-white h-screen p-4 flex flex-col border-r border-blue-50 fixed">
      <a href="/" className="mb-8">
        <img src={logo} alt="TaskFlow Logo" />
      </a>

      <nav className="flex flex-col gap-2">
        {DataLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              onClick={() => navigate(item.path)}
              key={item.id}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors w-full cursor-pointer
              ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              <img src={item.icon} alt={`${item.name} icon`} />
              <p>{item.name}</p>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto mx-auto text-sm text-gray-400">
        © 2025 TaskFlow
      </div>
    </aside>
  );
};
