//import React from 'react';
//import './TodoSearch.css';

function Buspub(){
    const onSearchTodoValue=(event)=>{
        console.log(event.target.value)
    }
    return(
      <input 
        className="Buspub" 
        placeholder="Busca un curso"
        onChange={onSearchTodoValue}
      />
    );
}

//export {Buspub};//