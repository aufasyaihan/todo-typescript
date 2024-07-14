import React from "react";
import Todo from "../models/todo";
import Todos from "./Todos";

const Sidebar: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <div className="py-10 pl-5 px-10 w-72 h-screen bg-gray-800 text-white">
      <div className="w-full">
        <h2 className="text-4xl font-bold tracking-wider underline underline-offset-4 decoration-red-500">
          Todo
        </h2>
      </div>
      <ul className="mt-2">
        <Todos items={props.todos} />
      </ul>
    </div>
  );
};

export default Sidebar;
