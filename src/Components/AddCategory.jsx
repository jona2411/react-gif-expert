import React, { useState } from 'react';


export const AddCategory = ({onNewCategory  }) => {
//useState tabulador => luego useStateSnippet

    const [inputValue, setInputValue] = useState('');

const onInputChange = ({target})=>{
    
    setInputValue(target.value);
}

const onSubmit = (event) =>{
    event.preventDefault();//buscar
  //console.log(inputValue);
const inputTrim = inputValue.trim();

  if(inputTrim.length <=1) return;//para eliminar espasios vacios 
 
  //llamar las categorias anteriores de la forma que masca la siguente linea
 // setCategoria(categoria => [ inputValue, ...categoria]);
 onNewCategory(inputTrim);
  setInputValue('');

}
  return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
    type="text"
    placeholder="buscar gifs"
    value={ inputValue }
  onChange={onInputChange}

 />
    </form>
 
    
  )
}
