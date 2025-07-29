import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/header/Header";
import { TaskToday } from "../components/overview/TaskToday";
import { Calendary } from "../components/overview/Calendary";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex ">
      <div className="relative w-60">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      {location.pathname === "/" && (
        <div className=" w-[27rem] ml-08 bg-[#F5F5F7] p-6 flex flex-col items-center gap-4">
          <Calendary />
          <TaskToday />
        </div>
      )}
    </div>
  );
};
