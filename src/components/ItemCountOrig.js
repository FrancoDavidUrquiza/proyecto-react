import React from 'react';
import { useState } from 'react'
import { AiFillMinusCircle,AiFillPlusCircle,AiOutlineShoppingCart } from 'react-icons/ai'

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
            <AiFillPlusCircle className='ItemCountOrig-icono-suma' color='blue'/>
          </button> 
          <p className="ItemCountOrig-contador">{numClics}</p>
          <button className='ItemCountOrig-resta'
            onClick={sacarProductos}>
            <AiFillMinusCircle className='ItemCountOrig-icono-resta' color='red'/>
          </button>
      </div>
        <div className='ItemCountOrig-btn-carrito'>
            <button><AiOutlineShoppingCart className='ItemCountOrig-icono-carrito' color='green' onClick={ () =>onAdd(numClics)} /></button>
        </div>
            
            
    </div>
  );
}

export default ItemCountOring;