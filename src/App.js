// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

const App = () => (
    <Provider store={store}>
        <div className='container my-3 fs-3'>
        Todo APP
        </div>
        <div className="app-container pt-5">
          
            <TodoInput />
            <TodoList />
        </div>
    </Provider>
);

export default App;