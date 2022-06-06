import React, { useContext,  useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ItemCountOring from '../ItemCountOrig';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Swal from 'sweetalert2';


function Item({item}) {

  const [cantidadProductos, setcantidadProductos] = useState(null);
  
  const cartCtx = useContext(CartContext);

  

  function addHandler( quantityToAdd) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title:` ${item.title} agregado al carrito `,
      showConfirmButton: false,
      timer: 1500
    })
    if(quantityToAdd > 0){
      cartCtx.addProduct({ quantity : quantityToAdd,...item});
    }else{
      Swal.fire('No hay productos que agregar')
    }
    
    
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
          
          <ItemCountOring initial={1} stock={item?.stock} onAdd={addHandler} />
        {cartCtx.products.length ? 
          <button className='ItemCountOrig-btn-order'>
            <AiOutlineShoppingCart color='green' className='ItemCountOrig-icono-order' />
            <Link className='ItemCountOrig-link-order'  to='/cart'>Ir al carrito</Link>
          </button> : ''}
          
        </div>
        
      </div>
    </div>
        
  );
}

export default Item;