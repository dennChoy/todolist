import React from "react";
import './ToDoCounter.css';

function ToDoCounter({total, completed}) {

    return (
        <h2 className="TodoCounter">Has completado {completed} ToDo's de {total}</h2>
    );
}

export {ToDoCounter};