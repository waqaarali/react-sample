import './assets/css/Todo.scss';

import React, { ReactElement, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Todo from './Todo';
import Weather from '../Weather/Weather';

interface TodoInterface {
    id: number,
    title: string
}

export const TodoList = () : ReactElement => {
    const todoRef = useRef<HTMLInputElement>({} as HTMLInputElement); // Initialise ref for our input

    const [todos, setTodo] = useState<TodoInterface[]>([]); // Initialise state for all todos using interface of Todo
    const [todoTitle, setTodoTitle] = useState<string>(''); // Our todo's main text (title) will be in a state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value); // Update title when a user enters text

    const handleClick = () : void => {
        // Handle the click, add a new todo with the ID of date.now() just for testing, as well as a title
        const newTodo: TodoInterface = { id: Date.now(), title: todoTitle };
        setTodo((prevTodos) => (prevTodos.concat(newTodo))); // Concat previous todos and add on new todo (could also use .push)
    };

    // Delete todo (as it gets triggered from our prop) by using filtering technique (ES5 syntax)
    const handleDelete = (id: number) : void => setTodo((prevTodos) => (prevTodos.filter((todo: TodoInterface) => todo.id !== id)));

    return (
        <div className="todo--list">
            <Weather />

            <h2>Daily Todos ({todos.length})</h2>
            <div className="header">
                <input type="text" ref={todoRef} onChange={handleChange} placeholder="Add a new todo" />
                <button onClick={handleClick}>Add</button>
            </div>
            
            <div className="todo--content">
                <TransitionGroup component="div">
                    {todos.map((todo) => (
                        <CSSTransition key={todo.id} timeout={500} classNames="todoAnim">
                            <Todo key={todo.id} id={todo.id} title={todo.title} onDelete={handleDelete} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
};