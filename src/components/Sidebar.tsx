import React from "react";
import Todo from "../models/todo";
import Todos from "./Todos";
import { useDispatch } from "react-redux";
import { selectTodo } from "../store/todosSlice";
import { setPage } from "../store/pageSlice";

const Sidebar: React.FC<{
  todos: Todo[];
}> = (props) => {
  const dispatch = useDispatch();
  const selectTodoHandler = (id: number) => {
    dispatch(selectTodo(id));
    dispatch(setPage(id));
  };
  return (
    <div className="py-10 pl-5 px-10 w-72 h-screen bg-gray-800 text-white">
      <div className="w-full">
        <h2 className="text-4xl font-bold tracking-wider underline underline-offset-4 decoration-blue-500">
          Todo
        </h2>
      </div>
      <ul className="mt-2">
        {props.todos.length > 0 ? (
          <Todos onClick={selectTodoHandler} items={props.todos} />
        ) : (
          <p className="text-gray-400">You have nothing to do, add todos now</p>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
