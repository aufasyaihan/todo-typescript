import React from "react";
import Todo from "../models/todo";
import Button from "../UI/Button";

const TodoItem: React.FC<{
  todo?: Todo;
  onChangePage: (page: string | number) => void;
}> = (props) => {
  return (
    <div className="flex flex-col gap-5 p-4 m-5 rounded border border-gray-300 shadow-md">
      <div className="flex border-b border-gray-400 justify-between items-center pb-2">
        <h3 className="text-3xl font-bold ">
          {props.todo?.title}
        </h3>
        <Button
          color="bg-red-500 text-white hover:bg-red-600"
          onClick={() => props.onChangePage("home")}
        >
          Home
        </Button>
      </div>
      <p className="text-gray-400">Due Date : {props.todo?.date}</p>
      <p>{props.todo?.description}</p>
    </div>
  );
};

export default TodoItem;
