import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import CartContext from '../store/cart-context';
import '../hojas-de-estilos/cartItem.css'

function Cart() {
    const cartCtx = useContext(CartContext)

    return (
        <div className='Cart-princripal'>
            <div className='Cart-item'>
                {
                    cartCtx.products.map(p => <CartItem item={p} key={p.id} />
                    )
                }
                
                
            </div>
            
            {cartCtx.products.length !== 0 ?
            <div className='Cart-dato'>
                <p>Precio Total : ${cartCtx.totalPrice()}</p>
                <button onClick={()=>console.log(cartCtx.clear())}>Vaciar Carrito</button>
                <Link to='/checkout'>
                    <button className='Cart-btn'>Terminar compra</button>
                </Link>    
            </div> :
            <>
                <h2>No hay Productos en el carro</h2>
                <Link to='/'>Ir al inicio</Link>
            </>
            }
            
        </div>
    );
}

export default Cart;