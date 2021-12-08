//import './App.css';
import React from 'react';
import {ToDoCounter} from '../ToDoCounter';
import {ToDoSearch} from '../ToDoSearch';
import {ToDoList} from '../ToDoList';
import {ToDoItem} from '../ToDoItem';
import {CreateToDoBtn} from '../CreateToDoBtn';

const defaultTodos = [
  {text: 'tarea 1', completed:true},
  {text: 'tarea 2', completed:false},
  {text: 'tarea 3', completed:false},
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length<=0){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
    );
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <ToDoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      
      <ToDoList>
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
      
      <CreateToDoBtn/>  
    </React.Fragment>
  );
}

export default App;
