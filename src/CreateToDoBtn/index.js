import React from "react";
import "./ToDoButton.css";

function CreateToDoBtn(props){

    const onClickButton = (msg) => {
      //alert(msg);
      props.setOpenModal(prevState => !prevState);
    }
    return (
        <button
          className="CreateTodoButton"
          onClick={()=> onClickButton("abrete sesmi")}
        >
          +
        </button>
      );

}

export {CreateToDoBtn};