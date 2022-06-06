import React from "react";

import { Link } from "react-router-dom";

// import ImagenCard from '../../imagenes/CrochetBolso.png'

const ItemCard =( { id,title,price,image } )=>{
  return(
    <>
      <div className='ItemCount-principal'>
        <div className='ItemCount-card'>
          <Link to={'/item/' + id}> <img src={ image }></img></Link>
          <div className="ItemCount-description">
            <h5>{ title }</h5>
            <p>${ price }</p>

          </div>
        </div>
      </div>
      
         
    </>
  );
}

export default ItemCard;