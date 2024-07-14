import NewTodo from "./components/NewTodo";
import Sidebar from "./components/Sidebar";
// import Todos from "./components/Todos";
import Todo from "./models/todo";
import { NewTodoInput } from "./components/NewTodo";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [page, setPage] = useState<string | number>("home");

  const pageHandler = (page: string | number) => {
    setPage(page);
  };

  const addTodoHandler = (todo: NewTodoInput) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: +new Date() + Math.random(),
          title: todo.title,
          description: todo.description,
        },
      ];
    });
  };
  return (
    <div className="flex">
      <Sidebar todos={todos} />
      <div className="w-full h-full">
        {page === "home" && <HomePage onClick={pageHandler} />}
        {page === "add" && <NewTodo onAddTodo={addTodoHandler} />}

        {/* <Todos items={todos} /> */}
      </div>
    </div>
  );
}

export default App;
