import React from "react";
import { Link } from "react-router-dom";


function CartWidget (){

  

  return(
    <div className="contenedor-cartWidget">
      <Link to='/cart'>
        <ion-icon name="cart-outline" className='icono-carrito'></ion-icon>
      </Link>
      
      
    </div>
  );
}
export default CartWidget;