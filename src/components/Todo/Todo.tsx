import React, { ReactElement, useState, useRef } from 'react';

type TodoTypes = {
    id: number,
    title: string,
    onDelete: Function
}

const Todo = ({ id, title, onDelete } : TodoTypes) : ReactElement => {
    const editRef = useRef<HTMLInputElement>(null) // Initialize ref with type of input
    
    const [isEditing, setEditing] = useState<boolean>(false); // Initialize state for detecting if a user is editing or not
    const editTodo = () : void => setEditing(!isEditing); // Toggle state of todo (if editing, or not)
    const deleteTodo = () : void => onDelete(id); // Trigger prop-passed function with the id of the Todo

    const [mutatedTitle, setTitle] = useState<string>(title); // state for the title, since we cannot directly modify the prop
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value) // Set title whenever the input changes

    return (
        <div className="todo">
            {
                // Basic conditional rendering, depending on if a user is editing or not
                !isEditing ?
                (
                    <span className="title">{mutatedTitle}</span>
                ) 
                :
                (
                    <input className="title" ref={editRef} onChange={handleChange} value={mutatedTitle}></input>
                )
            }
            <div className="controls">
                <button onClick={editTodo}>Edit</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;