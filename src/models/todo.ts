interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export interface NewTodoInput {
  title: string;
  description: string;
  date: Date;
}

export default Todo;
