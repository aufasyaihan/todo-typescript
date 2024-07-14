import React from "react";
import Todo from "../models/todo";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";
import { setPage } from "../store/pageSlice";

const TodoItem: React.FC<{
  todo?: Todo;
}> = (props) => {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const dispatch = useDispatch();

  const deleteTodoHandler = (id: number) => {
    dispatch(deleteTodo(id));
    dispatch(setPage("home"));
  };
  return (
    <div className="flex flex-col gap-5 p-4 m-5 rounded border border-gray-300 shadow-md">
      <div className="flex border-b border-gray-400 justify-between items-center pb-2">
        <h3 className="text-3xl font-bold ">{props.todo?.title}</h3>
        <div className="flex gap-2">
          <Button
            color="bg-gray-700 text-white hover:bg-gray-800"
            onClick={() => dispatch(setPage("home"))}
          >
            Home
          </Button>
          <Button
            color="bg-red-500 text-white hover:bg-red-600"
            onClick={() => deleteTodoHandler(props.todo!.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <p
        className={
          currentDate === props.todo?.date
            ? "bg-red-500 text-white py-2 px-2 w-fit rounded"
            : "text-gray-400"
        }
      >
        Due Date :{" "}
        {currentDate === props.todo?.date ? "Today!" : props.todo?.date}
      </p>
      <p>{props.todo?.description}</p>
    </div>
  );
};

export default TodoItem;
