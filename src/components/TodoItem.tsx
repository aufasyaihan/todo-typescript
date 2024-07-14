import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ todo?: Todo }> = (props) => {
  return (
    <div className="flex flex-col gap-5 p-4 m-5 rounded border border-gray-300 shadow-md">
      <h3 className="text-3xl font-bold border-b border-gray-400">
        {props.todo?.title}
      </h3>
      <p className="text-gray-400">Due Date : {props.todo?.date}</p>
      <p>{props.todo?.description}</p>
    </div>
  );
};

export default TodoItem;
