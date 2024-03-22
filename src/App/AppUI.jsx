import React                from 'react';
import { TodoCounter }      from '../TodoCounter';
import { TodoSearch }       from '../TodoSearch';
import { TodoList }         from '../TodoList';
import { TodoItem }         from '../TodoItem';
import {TodosLoading}       from '../TodoLoading';
import { TodosError }       from '../TodoError';
import { EmptyTodos }       from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoHeader }       from '../TodoHeader';
import { TodoContext }      from '../TodoContext';
import { Modal }            from '../Modal';
import { TodoForm }         from '../TodoForm';

function AppUI()  {
    const  {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
         <TodoHeader />
         
         <TodoCounter/>
         <TodoSearch/>
          <TodoList> 
                {loading && ( 
                  <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                  </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
            {/* Toda esta vaina es para que me cree un item por cada elemento del array */}
              { searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
              ))}
          </TodoList>
          
          <CreateTodoButton 
            setOpenModal={setOpenModal}          
          />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
       </React.Fragment>
      );
 }
     
 export { AppUI }