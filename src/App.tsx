import NewTodo from "./components/NewTodo";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const selectedTodoId = useSelector(
    (state: RootState) => state.todos.selectedTodoId
  );
  const page = useSelector((state: RootState) => state.page.page);

  return (
    <div className="flex">
      <Sidebar todos={todos} />
      <div className="w-full h-full">
        {page === "home" && <HomePage />}
        {page === "add" && <NewTodo />}
        {page === selectedTodoId && (
          <TodoItem todo={todos.find((todo) => todo.id === selectedTodoId)} />
        )}
      </div>
    </div>
  );
}

export default App;
