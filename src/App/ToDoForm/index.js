import React from "react";
import './ToDoForm.css';

import { ToDoContext } from "../ToDoContext";

function ToDoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    }=React.useContext(ToDoContext);

    const onCancel = () =>{
        setOpenModal(false);
    }

    
    const onSubmit = (event) =>{
        event.preventDefault();
        //console.log("submit");
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onChangeNewTodo = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>..</label>
            <textarea
                value={newTodoValue}
                onChange={onChangeNewTodo}
                placeholder="ingrese el todo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };