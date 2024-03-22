import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton( {setOpenModal} ) {
    return ( 
        <button
        onClick={ () =>{
            setOpenModal(state =>!state)
        }} 
        className='Create-todo-button'>
            Agregar
        </button>
    )
}

export { CreateTodoButton };