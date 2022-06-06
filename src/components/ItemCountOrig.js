import React from 'react';
import { useState } from 'react'
import { AiFillMinusCircle,AiFillPlusCircle } from 'react-icons/ai'


function ItemCountOring( { initial, stock, onAdd } ) {
  const [numClics,setNumClics] = useState(initial);
  
  const AgregarProductos = () =>{
    if(numClics<stock){
      
      setNumClics(numClics + 1);
    }else{
      alert('no hay mas stock')
    }
  }
  const sacarProductos = () =>{
    if(numClics>0){
      setNumClics(numClics-1)
    }
  }
  
  return (
    <div className='ItemCountOrig-detail'>
      <div className='ItemCountOrig-btn'>
          <button className='ItemCountOrig-suma'
            onClick={AgregarProductos}>
            <AiFillPlusCircle className='ItemCountOrig-icono-suma'/>
          </button> 
          <p className="ItemCountOrig-contador">{numClics}</p>
          <button className='ItemCountOrig-resta'
            onClick={sacarProductos}>
            <AiFillMinusCircle className='ItemCountOrig-icono-resta'/>
          </button>
      </div>
        <div className='ItemCountOrig-btn-carrito'>
            <button 
              className='ItemCountOrig-icono-carrito'
              onClick={ () =>onAdd(numClics)}>
              Agregar al carrito
            </button>
        </div>
            
            
    </div>
  );
}

export default ItemCountOring;