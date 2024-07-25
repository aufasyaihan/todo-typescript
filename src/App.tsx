import NewTodo from "./components/NewTodo";
import Sidebar from "./pages/Sidebar";
import HomePage from "./components/HomePage";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  // const selectedTodoId = useSelector(
  //   (state: RootState) => state.todos.selectedTodoId
  // );
  // const page = useSelector((state: RootState) => state.page.page);
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Sidebar todos={todos} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "add",
          element: <NewTodo />,
        },
        {
          path: ":id",
          element: <TodoItem />,
        }
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;

  // return (
  //   <div className="flex">
  //     <Sidebar todos={todos} />
  //     <div className="w-full h-full">
  //       {page === "home" && <HomePage />}
  //       {page === "add" && <NewTodo />}
  //       {page === selectedTodoId && (
  //         <TodoItem todo={todos.find((todo) => todo.id === selectedTodoId)} />
  //       )}
  //     </div>
  //   </div>
  // );
}

export default App;
