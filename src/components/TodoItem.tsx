import React from "react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todosSlice";
import { setPage } from "../store/pageSlice";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="flex flex-col gap-5 p-4 m-5 rounded border border-gray-300 shadow-md">
      <div className="flex border-b border-gray-400 justify-between items-center pb-2">
        <h3 className="text-3xl font-bold ">{todo?.title}</h3>
        <div className="flex gap-2">
          <Button
            color="bg-gray-700 text-white hover:bg-gray-800"
            onClick={() => dispatch(setPage("home"))}
          >
            Home
          </Button>
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
            ? "bg-red-500 text-white py-2 px-2 w-fit rounded"
            : "text-gray-400"
        }
      >
        Due Date :{" "}
        {isToday
          ? "Today!"
          : isOverdue
          ? `Overdue! it was supposed to be ${formatDate(todo!.date)}`
          : formatDate(todo!.date)}
      </p>
      <p>{todo?.description}</p>
    </div>
  );
};

export default TodoItem;
