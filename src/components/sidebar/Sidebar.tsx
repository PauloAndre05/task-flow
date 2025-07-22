import { useState } from "react";
import logo from "../../assets/Logo.svg"

import * as Icon from "../../assets/sidebar-Icons/index"

const DataLinks = [
    {id: 1, name: "Overview", icon: Icon.Overview},
    {id: 2, name: "Mentors", icon: Icon.Mentors},
    {id: 3, name: "Message", icon: Icon.Message},
    {id: 4, name: "Setting", icon: Icon.Setting},
    {id: 5, name: "Task", icon: Icon.Task},
]

export const Sidebar = () => {

    const [activeId, setActiveId] = useState<number>(1)

    return (
    <aside className="w-64 bg-white h-screen p-4 flex flex-col border-r border-blue-50">
      <a href="/" className="mb-8">
        <img src={logo} alt="TaskFlow Logo" />
      </a>

      <nav className="flex flex-col gap-2">
       {DataLinks.map((item) => (
        <a 
          onClick={() => setActiveId(item.id)}
          key={item.id}
          href="#"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors w-full
              ${activeId === item.id ? "bg-blue-100 text-blue-600 font-medium" : "hover:bg-blue-50 text-gray-700"}`}
        >
          <img src={item.icon} alt={`${item.name} icon`} />
          <p>{item.name}</p>
        </a>
       ))}
      </nav>

      <div className="mt-auto mx-auto text-sm text-gray-400">© 2025 TaskFlow</div>
    </aside>
  );
};
