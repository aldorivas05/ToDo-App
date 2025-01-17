import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <div className='todo-search-container'>
            <input 
            placeholder="Codinar"
            className='Todosearch'
            value={searchValue}
            onChange={(event) =>{
                setSearchValue(event.target.value);
            }}
            
            />
        </div>
    );
};


export { TodoSearch };