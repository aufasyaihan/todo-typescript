import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RootLayout: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      <div className="flex h-screen">
        <Sidebar todos={todos} />
        <div className="flex-1 h-screen scale-90 md:scale-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
