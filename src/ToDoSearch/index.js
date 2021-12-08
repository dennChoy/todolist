import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}){

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