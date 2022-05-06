import React from 'react';
import ItemCountOring from '../ItemCountOrig';

function Item({item}) {
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
          <ItemCountOring initial={1} stock={5} />
        </div>
      </div>
    </div>
        
  );
}

export default Item;