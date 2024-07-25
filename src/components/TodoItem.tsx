import React from "react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todosSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

const TodoItem: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const params = useParams<{ id: string }>();
  const todo = todos.find((todo) => todo.id === +params.id!);
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString();
  const todoDate = todo!.date.toLocaleDateString();

  const dispatch = useDispatch();

  const isToday = currentDate === todoDate;
  const isOverdue = currentDate > todoDate;

  const deleteTodoHandler = (id: number) => {
    dispatch(deleteTodo(id));
    navigate("/");
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-5 p-4 md:m-5 rounded border border-gray-300 shadow-md">
      <div className="flex gap-6 items-start flex-col-reverse md:flex-row border-b border-gray-400 justify-between md:items-center pb-2">
        <h3 className="text-2xl w-full md:text-3xl font-bold ">{todo?.title}</h3>
        <div className="flex gap-2">
          <Link to="/" className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-800">
            Home
          </Link>
          <Button
            color="bg-red-500 text-white hover:bg-red-600"
            onClick={() => deleteTodoHandler(todo!.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <p
        className={
          isToday || isOverdue
            ? "bg-red-500 text-sm md:text-md text-white py-2 px-2 w-fit rounded"
            : "text-gray-400 text-sm md:text-md"
        }
      >
        Due Date :{" "}
        {isToday
          ? "Today!"
          : isOverdue
          ? `Overdue! it was supposed to be ${formatDate(todo!.date)}`
          : formatDate(todo!.date)}
      </p>
      <p className="text-sm md:text-md">{todo?.description}</p>
    </div>
  );
};

export default TodoItem;
