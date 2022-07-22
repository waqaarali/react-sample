import React, { ReactElement, useState, useRef } from 'react';

type TodoTypes = {
    id: number,
    title: string,
    onDelete: Function
}

const Todo = ({ id, title, onDelete } : TodoTypes) : ReactElement => {
    const editRef = useRef<HTMLInputElement>(null)
    
    const [isEditing, setEditing] = useState<boolean>(false);
    const editTodo = () : void => {
        setEditing(!isEditing);
    }

    const deleteTodo = () : void => onDelete(id);

    const [mutatedTitle, setTitle] = useState<string>(title);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

    return (
        <div className="todo">
            {
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