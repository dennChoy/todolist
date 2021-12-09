import React from "react";
import { ToDoContext } from "../App/ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch(){

    const {searchValue, setSearchValue} = React.useContext(ToDoContext);

    const onSearchValueFromInput = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return[
        <input className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue} 
            onChange={onSearchValueFromInput}
        />,
        <p>{searchValue}</p>
    ];
}

export {ToDoSearch};