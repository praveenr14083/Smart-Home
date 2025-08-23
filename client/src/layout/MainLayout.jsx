import React from "react";
import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
