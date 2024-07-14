interface Todo {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface NewTodoInput {
  title: string;
  description: string;
  date: string;
}

export default Todo;
