import React from "react";
import {ToDoCounter} from '../ToDoCounter';
import {ToDoSearch} from '../ToDoSearch';
import {ToDoList} from '../ToDoList';
import {ToDoItem} from '../ToDoItem';
import {CreateToDoBtn} from '../CreateToDoBtn';
import { ToDoContext } from './ToDoContext'
import { Modal } from '../Modal'; 
import { ToDoForm } from './ToDoForm';

function AppUI(){
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
        } = React.useContext(ToDoContext)

    return(
        <React.Fragment>
        <ToDoCounter/>
        <ToDoSearch/>
        
               
        <ToDoList>
            {error && <p>Error :( </p>}
            {loading && <p>Cargading </p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

            {searchedTodos.map(todo=>(
                <ToDoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
            />
        ))}
        </ToDoList>  

        {!!openModal && (
            <Modal>
                <ToDoForm/>
            </Modal>
        )}    
        <CreateToDoBtn
            setOpenModal={setOpenModal}
        />  
      </React.Fragment>
    );

}

export { AppUI };