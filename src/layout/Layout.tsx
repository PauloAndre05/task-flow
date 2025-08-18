import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/header/Header";
import { TaskToday } from "../components/overview/TaskToday";
import { Calendary } from "../components/overview/Calendary";
import { useEffect, useState } from "react";

export const Layout = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();

  useEffect(() => {
    if (location.pathname == "/") {
      setTitle("Hi, Paulo André");
      setSubtitle("Let's finish your task today!");
    } else if (location.pathname == "/task") {
      setTitle("Explore Task");
      setSubtitle("");
    } else if (location.pathname == "/mentors") {
      setTitle("Explore Mentors");
      setSubtitle("");
    } else if (location.pathname == "/message") {
      setTitle("Message");
      setSubtitle("");
    } else if (location.pathname == "/setting") {
      setTitle("Settings");
      setSubtitle("");
    } else if (location.pathname == "/task/task-detail") {
      setTitle("Detail Task");
      setSubtitle("");
    } 
  }, [location.pathname]);

  return (
    <div className="flex overflow-hidden h-screen">
      <div className="relative w-60 ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} subtitle={subtitle} />
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
