import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li
          key={item.id}
          className="w-full text-start py-2 px-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
