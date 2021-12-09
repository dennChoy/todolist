import React from "react";
import { ToDoContext } from "../App/ToDoContext";
import './ToDoCounter.css';

function ToDoCounter() {
    const {totalTodos, completedTodos} = React.useContext(ToDoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} ToDo's de {totalTodos}</h2>
    );
}

export {ToDoCounter};