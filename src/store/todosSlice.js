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
        addTodo: (state, action) => {
            state.unshift({ id: Date.now(), title: action.payload.title,description: action.payload.description, completed: false });
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