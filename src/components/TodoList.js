// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todosSlice';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
     <div className='container w-50 '>
        {todos.length ? 
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>

            
               <div className='w-100'>
               <div className='d-flex align-items-center justify-content-between w-100'>
                  <input type="checkbox" className=' checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
                    
                  <div className='title'>{todo.title}</div>
                  <span className='ms-auto me-3'>
                    <DeleteRoundedIcon className='text-danger' onClick={() => dispatch(deleteTodo(todo.id))} />
               
                  </span>
                 </div>
                  <div className='desc ms-5'>{todo.description}</div>
               </div>
                </li>
            ))}
        </ul>
        : <div className='d-flex justify-content-center align-items-center pt-5' style={{ height: '200px' }}> 
            <img src="assets/NodataFound.svg" className=' d-flex' alt="No Data Found" /> 
         </div>}
     </div>
    );
};

export default TodoList;