import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo, { NewTodoInput } from '../models/todo';

export interface TodosState {
  todos: Todo[];
  selectedTodoId: number | null;
}

const initialState: TodosState = {
  todos: [],
  selectedTodoId: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<NewTodoInput>) => {
      state.todos.push({
        id: +new Date() + Math.random(),
        title: action.payload.title,
        description: action.payload.description,
        date: new Date(action.payload.date).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    selectTodo: (state, action: PayloadAction<number>) => {
      state.selectedTodoId = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, selectTodo } = todosSlice.actions;
export default todosSlice.reducer;
