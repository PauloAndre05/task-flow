import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/header/Header";

export const Layout = () => {

  const location = useLocation()

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      {
        location.pathname === "/" && (
          <div className="border w-[27rem] ml-8 bg-[#F5F5F7] p-4">Third Section</div>
        )
      }
    </div>
  );
};
