import React from "react";
import Todo from "../models/todo";
// import Todos from "../components/Todos";
// import { useDispatch } from "react-redux";
// import { selectTodo } from "../store/todosSlice";
// import { setPage } from "../store/pageSlice";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<{
  todos: Todo[];
}> = (props) => {
  // const dispatch = useDispatch();
  // const selectTodoHandler = (id: number) => {
  //   dispatch(selectTodo(id));
  //   dispatch(setPage(id));
  // };
  return (
    <>
      <div className="absolute md:static py-10 pl-5 px-10 w-72 h-screen bg-gray-800 text-white">
        <div className="flex items-center w-full">
          <h2 className="text-4xl font-bold tracking-wider underline underline-offset-4 decoration-blue-500">
            Todo
          </h2>
          <div className="md:hidden">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                />{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                />{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                />{" "}
              </g>
            </svg>
          </div>
        </div>
        <ul className="mt-2">
          {props.todos.length > 0 ? (
            // <Todos onClick={selectTodoHandler} items={props.todos} />
            props.todos.map((todo) => (
              <NavLink key={todo.id} to="/todos">
                {todo.title}
              </NavLink>
            ))
          ) : (
            <p className="text-gray-400">
              You have nothing to do, add todos now
            </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
