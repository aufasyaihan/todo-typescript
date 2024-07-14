import React from "react";
import Todo from "../models/todo";

const Sidebar: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <div className="py-10 pl-5 px-10 w-72 h-screen bg-gray-800 text-white">
      <div className="w-full">
        <h2 className="text-4xl font-bold tracking-wider underline underline-offset-4 decoration-red-500">
          Todo
        </h2>
      </div>
      <div className="mt-2">
        {props.todos.map((item) => (
          <button
            key={item.id}
            className="w-full text-start py-2 px-2 rounded hover:bg-gray-600"
          >
            <h3>{item.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
