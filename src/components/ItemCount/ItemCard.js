import React from "react";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

// import ImagenCard from '../../imagenes/CrochetBolso.png'

const ItemCard =( { title,price,image,id} )=>{
  return(
    <>
      <div className='ItemCount-card'>
        <img src={image}></img>
        <h4>{title}</h4>
        <h3>${price}</h3>
        <Link to={'/item/' + id}><Button variant="primary">Ver mas</Button></Link> 
        
        
      </div>
         
    </>
  );
}

export default ItemCard;