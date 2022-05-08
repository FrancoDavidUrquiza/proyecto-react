import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCountOring from '../ItemCountOrig';

function Item({item}) {

  const [cantidadProductos, setcantidadProductos] = useState(null);

  function addHandler(quantityToAdd) {
    setcantidadProductos(quantityToAdd);
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
          {cantidadProductos ? 
          <button><Link to='/cart'>Terminar compra ({cantidadProductos} items) </Link></button> :
          <ItemCountOring initial={0} stock={10} onAdd={addHandler} />
            }
          
        </div>
      </div>
    </div>
        
  );
}

export default Item;