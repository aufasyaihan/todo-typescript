import NewTodo from "./components/NewTodo";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { NewTodoInput } from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      <Sidebar />
      <div className="w-full h-full">
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} />
      </div>
    </div>
  );
}

export default App;
