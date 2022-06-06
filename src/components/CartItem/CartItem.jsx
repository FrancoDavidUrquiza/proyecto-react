import React, {useContext} from 'react';
import CartContext from '../../store/cart-context.js';
import { BsFillCartXFill } from "react-icons/bs";


function CartItem({ item }) {

    const cartCtx = useContext(CartContext)
    

    return (
        <>
        <div className='CartItem-principal'>
            <div className='CartItem-img'>
                <img className='CartItem-imagen' src={item?.image} alt='Imagen del Producto' />

            </div>
            <div className='CartItem-datos'>
                <p className='CartItem-title'>{ item?.title  }</p>
                <p>Precio Unitario :${ item?.price }</p>
                <p>Cantidad : { item?.quantity}</p>
                <p>Precio Total :${ item.price * item.quantity }</p>
                <button 
                    
                    onClick={()=>cartCtx.removeProduct(item.id)}>
                    <BsFillCartXFill  color='red' size={25} />
                </button>
                
                
            </div>


        </div>
        </>
    );
}

export default CartItem;