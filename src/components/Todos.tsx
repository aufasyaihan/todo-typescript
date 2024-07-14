import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{
  items: Todo[];
  onClick: (page: number) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li
          key={item.id}
          className="w-full text-start py-2 px-2 rounded hover:bg-gray-600 cursor-pointer"
          onClick={() => props.onClick(item.id)}
        >
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
