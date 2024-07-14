import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos: Todo[] = [
    {
      id: +new Date() + Math.random(),
      title: "learn react with js",
      description: "i want to learn react with js",
    },
    {
      id: +new Date() + Math.random(),
      title: "learn react with ts",
      description: "i want to learn react with ts",
    },
  ];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
