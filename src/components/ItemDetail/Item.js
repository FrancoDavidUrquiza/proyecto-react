import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ItemCountOring from '../ItemCountOrig';

function Item({item}) {

  const [cantidadProductos, setcantidadProductos] = useState(null);
  
  const cartCtx = useContext(CartContext);

  

  function addHandler( quantityToAdd) {
    cartCtx.addProduct({quantity : quantityToAdd,...item});
    
  }
  

  return (
    <div className='itemDetailCointainer-principal'>
      <div className='itemDetailCointainer-left'>
        <img className='itemDetailCointainer-img' src={item?.image} />
      </div>
      <div className='itemDetailCointainer-right'>
        <div className='itemDetailCointainer-description'>
          <h1>
            {item?.title}
          </h1>
          <h3>
            Precio : ${item?.price}
          </h3>
          <h4>
            {item?.discount}
          </h4>
        </div>
        <div className='itemDetailCointainer-count'>
          <h4>Agregar al Carrito : </h4>
          <ItemCountOring initial={0} stock={10} onAdd={addHandler} />
          <button onClick={() => console.log(cartCtx.products)}>Imprimir carrito</button>
          <button onClick={()=>cartCtx.removeProduct(item.id)}>Remover Producto</button>
          <button onClick={()=>console.log(cartCtx.clear())}>Limpiar Carrito</button>
          <button onClick={() => console.log(cartCtx.isInCart(item.id))}>Is in cart</button>
          <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
          {/* {cartCtx.products.length ? 
          <button onClick={()=>console.log(cartCtx)}><Link to='/cart'>Terminar compra ({cantidadProductos} items) </Link></button> :} */}
          
        </div>
        
      </div>
    </div>
        
  );
}

export default Item;