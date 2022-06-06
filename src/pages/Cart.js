import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import CartContext from '../store/cart-context';
import '../hojas-de-estilos/cartItem.css'
import Footer from '../components/Footer/Footer';

function Cart() {
    const cartCtx = useContext(CartContext)

    return (
        <>
            <div className='Cart-princripal'>
                <div className='Cart-item'>
                    {
                        cartCtx.products.map(p => <CartItem item={p} key={p.id} />
                        )
                    }
                    
                    
                </div>
                
                {cartCtx.products.length !== 0 ?
                <div className='Cart-dato'>
                    
                    <h5>Precio Total : ${cartCtx.totalPrice()}</h5>
                    <p>Envio : Gratis</p>
                    <button className='Cart-btn-vaciar' onClick={()=>console.log(cartCtx.clear())}>Vaciar Carrito</button>
                    <Link className='Cart-btn-link' to='/checkout'>
                        <button className='Cart-btn'>Terminar compra</button>
                    </Link>    
                </div> :
                <>
                    <h2>No hay Productos en el carro</h2>
                    <Link to='/'>Ir al inicio</Link>
                </>
                }
                
            </div>
            <div>
                <Footer></Footer>
            </div>

        </>
        
    );
}

export default Cart;