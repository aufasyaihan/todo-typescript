import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Sidebar from "./components/Sidebar";
import Todo from "./models/todo";
import { NewTodoInput } from "./components/NewTodo";
import HomePage from "./components/HomePage";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const [page, setPage] = useState<string | number>("home");

  const pageHandler = (page: string | number) => {
    setPage(page);
  };

  const selectTodoHandler = (id: number) => {
    setSelectedTodoId(id);
    setPage(id);
  };

  const addTodoHandler = (todo: NewTodoInput) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: +new Date() + Math.random(),
          title: todo.title,
          description: todo.description,
          date: new Date(todo.date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        },
      ];
    });
    setPage("home");
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    setPage("home");
  }
  return (
    <div className="flex">
      <Sidebar todos={todos} onSelectTodo={selectTodoHandler} />
      <div className="w-full h-full">
        {page === "home" && <HomePage onClick={pageHandler} />}
        {page === "add" && (
          <NewTodo onAddTodo={addTodoHandler} onClick={pageHandler} />
        )}
        {page === selectedTodoId && (
          <TodoItem
            onChangePage={pageHandler}
            onDeleteTodo={deleteTodoHandler}
            todo={todos.find((todo) => todo.id === selectedTodoId)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
