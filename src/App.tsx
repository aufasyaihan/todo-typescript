import NewTodo from "./components/NewTodo";
import Sidebar from "./components/Sidebar";
// import Todos from "./components/Todos";
// import Todo from "./models/todo";

function App() {
  // const todos: Todo[] = [
  //   {
  //     id: +new Date() + Math.random(),
  //     title: "learn react with js",
  //     description: "i want to learn react with js",
  //   },
  //   {
  //     id: +new Date() + Math.random(),
  //     title: "learn react with ts",
  //     description: "i want to learn react with ts",
  //   },
  // ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        {/* <Todos items={todos} /> */}
        <NewTodo />
      </div>
    </div>
  );
}

export default App;
