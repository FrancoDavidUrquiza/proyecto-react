import React from 'react';


function CartItem({ item }) {
    return (
        <>
        <div className='CartItem-principal'>
            <div className='CartItem-img'>
                <img className='CartItem-imagen' src={item?.image} alt='Imagen del Producto' />

            </div>
            <div className='CartItem-datos'>
                <p className='CartItem-title'>{ item?.title  }</p>
                <p>Precio :${ item?.price }</p>
                <p>Cantidad : { item?.quantity}</p>
            </div>


        </div>
        </>
    );
}

export default CartItem;