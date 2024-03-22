import React from 'react';
import './TodoList.css';

function TodoList({children}) {
    return (
        <ul className="Todo-list">
            {children}
        </ul>
    );
};


export { TodoList };