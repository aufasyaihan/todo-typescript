import React, { useState } from "react";
import Todo from "../models/todo";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const Sidebar: React.FC<{
  todos: Todo[];
}> = (props) => {
  const [show, setShow] = useState(false);
  const isMedium = useMediaQuery("(min-width: 768px)");

  const showSidebarHandler = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <nav
        className={`md:static py-10 px-5 z-10 ${
          show ? "absolute w-72" : "w-[5.4rem]"
        } h-screen bg-gray-800 md:w-72 text-white transition-width ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center w-full">
          <h2
            className={`text-4xl font-bold tracking-wider underline underline-offset-4 decoration-blue-500 transition-all duration-300 ease-in-out overflow-hidden ${
              show || isMedium ? "opacity-100 w-full" : "opacity-0 w-0"
            }`}
          >
            Todo<span className="text-blue-500 underline underline-offset-4 decoration-white">List</span>
          </h2>
          <div
            className="md:hidden cursor-pointer"
            onClick={showSidebarHandler}
          >
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />{" "}
              </g>
            </svg>
          </div>
        </div>
        <ul className="mt-2 w-full">
          {props.todos.length > 0
            ? // <Todos onClick={selectTodoHandler} items={props.todos} />
              props.todos.map((todo, index) => (
                <li key={todo.id} className="w-full">
                  <NavLink
                    to={`/${todo.id}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 ${
                        show || isMedium ? "text-start" : "text-center"
                      }  rounded ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "hover:bg-gray-700"
                      }`
                    }
                    onClick={() => setShow(false)}
                  >
                    {show || isMedium ? todo.title : index + 1}
                  </NavLink>
                </li>
              ))
            : show && (
                <p className="text-gray-400">
                  You have nothing to do, add todos now
                </p>
              )}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
