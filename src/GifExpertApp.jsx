import React, { useState } from 'react';
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {

const [categoria    , setCategoria] = useState(['One Punch']);

  const onAddCategoria = (newCategory)=>{
    //categoria.push(newCategory);

console.log(newCategory);
if(categoria.includes(newCategory)) return;

setCategoria([newCategory, ...categoria]);
//setCategoria(cat=>[...categoria,'naruto']);
};
//console.log(categoria);
  return (
    <>


    <h1>GifExpertApp</h1>
    
   
   <AddCategory 

   //setCategoria={setCategoria}
   onNewCategory={event => onAddCategoria(event)}

   />

    
    
    
        {categoria.map(category => {
            return (

              <GifGrid key={category} category={category}/>
           // <div key={category}> 
           // <h3>{category}</h3>
             // <li >{category}</li>
        //       </div>
              )
       })}
 

    </>
  )
}
