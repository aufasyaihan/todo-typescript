import NewTodo from "./pages/NewTodo";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import TodoItem from "./components/TodoItem";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <RootLayout />,
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
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
