import React from "react";
import { useState } from 'react';
import ImagenCard from '../../imagenes/CrochetBolso.png'


function ItemCount ( {initial,stock } ){
  const [numClics,setNumClics] = useState(initial);
  
  const AgregarProductos = () =>{
    if(numClics<stock){
      setNumClics(numClics + 1);
    }else{
      alert('no hay mas stock')
    }
  }
  const sacarProductos = () =>{
    if(numClics>initial){
      setNumClics(numClics-1)
    }
  }
  const onAdd = () =>{
    alert('Se agregar los productos al carrito')
  }
  return(
    <div className='ItemCount-principal'>
      <div className='ItemCount-card'>
        <img src={ImagenCard} className='ItemCount-img'></img>
        <h4>Patrón Bolso Beige Estilo Mochila Wayuu a Crochet</h4>
        <h3>111$</h3>
        
        <div className='ItemCount-btn'>
          <button 
            onClick={AgregarProductos}>
            {<ion-icon name="add-outline"></ion-icon>}
          </button> 
          <p className="carrito">{numClics}</p>
          <button 
            onClick={sacarProductos}>
            {<ion-icon name="remove-outline"></ion-icon>}
          </button>
        </div>
        <div className="ItemCount-carrito"
          onClick={onAdd}>
            <button>Agregar al Carrito</button>
        </div>
      </div>
      
    </div>
  );
}

export default ItemCount;