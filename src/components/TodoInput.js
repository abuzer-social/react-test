// TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

const TodoInput = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (title) {
            dispatch(addTodo({ title, description }));
            setTitle('');
            setDescription('');
            setTitleError(false);
        } else {
            setTitleError(true);
        }
    };

    return (
        <div className="todo-input container w-25">
            <div className="form-group mb-4">
                 <label  class="form-label fw-bold">Title</label>
                <input  value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Title" />
                {titleError && <div className="text-danger">Title is required</div>}
            </div>
            <div className="form-group  mb-2">

                
            <label  class="form-label fw-bold">Description</label>
            <textarea class="form-control"  value={description} onChange={e => setDescription(e.target.value)} rows="5" ></textarea>
               
            </div>
            
            <button onClick={handleAddTodo} className='btn btn-primary rounded w-100 mt-2'>Add Todo</button>
        </div>
    );
};

export default TodoInput;
