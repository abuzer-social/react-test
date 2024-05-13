// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'Hardcoded Todo 1', description: 'Hardcoded Description 1', completed: false },
        { id: 2, title: 'Hardcoded Todo 2', description: 'Hardcoded Description 2', completed: false },
    ],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.unshift(action.payload); // Add new todo at the start of the array
            },
            prepare: ({ title, description }) => {
                return { payload: { id: nextTodoId++, title, description, completed: false } };
            },
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            // Sort todos array, completed todos will be moved to the end
            return state.sort((a, b) => a.completed - b.completed);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;