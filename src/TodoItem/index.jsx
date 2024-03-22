import React from 'react';
import IconComplete from '../assets/garrapata.png'
import IconDelete from '../assets/borrar.png'
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="Todo-Item">
        <img 
        className='Icon-completed' 
        src={IconComplete} 
        alt='Icon complete' 
        onClick={props.onComplete}
        />
        <p 
        className={`TodoItem-p 
        ${props.completed && "TodoItem-p--complete"}`
        }>
          {props.text}
        </p>
        <img 
        className='Icon-delete' 
        src={IconDelete} 
        alt='Borrar Item'
        onClick={props.onDelete}
        />

      </li>
    );
};

export { TodoItem };
