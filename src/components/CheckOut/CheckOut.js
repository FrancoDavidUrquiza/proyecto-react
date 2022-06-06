import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context';
import {collection,addDoc,getFirestore} from 'firebase/firestore'
import  Spinner  from '../Spinner/Spinner.js';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import '../../hojas-de-estilos/checkout.css'


// { buyer: { name, phone, email }, items: [{ id, title, price, quantity }], date, total  }

  

const CheckOut = () => {

  const cartCtx = useContext(CartContext)

  const [load,setLoad] = useState(false)
  const [orderID,setOrderID]=useState(  )


  const [buyer, setBuyer] = useState({
    Nombre:'',
    Apellido:'',
    Email:'',
    Telefono:''
  });

  const {Nombre, Apellido ,Email,Telefono} = buyer

  const handleInputChange = (e) =>{
    setBuyer(({
      ...buyer,
      [e.target.name] : e.target.value
    }))
    
  }

  const generateOrder = async(data)=>{
    const db = getFirestore();
    setLoad(true)
    try{
      const col = collection(db,'Orders')
      const order = await addDoc(col,data)
      setOrderID([order.id])
      cartCtx.clear()
      setLoad(false)
    }catch (error) {
      console.log(error)
    }
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const dia = new Date()
    const items =  cartCtx.products.map(e=>{return {id: e.id, title: e.title, price:e.price, quantity:e.quantity}})
    const total = cartCtx.getTotal()
    const data = {buyer,items,dia,total}
    console.log(data)
    generateOrder(data)
    
    
    
  }
  return (
    <>
    <div className='checkout-container'>
      <div className='checkout-container-principal'>
        <h1>Finalizando Compra</h1>
        <hr />
        { load ? <Spinner /> 
        : (!orderID&&<div className='checkout-container-form'>
          <h4>Completar Datos :</h4>
          <form onSubmit={handleSubmit}>
            <input className='checkout-input'
              type='text'
              name='Nombre'
              placeholder='Nombre'
              value={Nombre}
              onChange={handleInputChange}
            />
            <input className='checkout-input'
              type='text'
              name='Apellido'
              placeholder='Apellido'
              value={Apellido}
              onChange={handleInputChange}
            />
            <input className='checkout-input'
              type='text'
              name='Email'
              placeholder='Email'
              value={Email}
              onChange={handleInputChange}
            />
            <input className='checkout-input'
              type='number'
              name='Telefono'
              placeholder='Telefono'
              value={Telefono}
              onChange={handleInputChange}
            />
            <input className='checkout-submit'
              type='submit'
              value='Finalizar Compra'
              
            />
          </form>
          
        </div>)
        }
        <div>
          {
            orderID&&(
              <div className='checkout-container-order'>
                <h4>Compra Finalizado con exito</h4>
                <h4>{`Su codigo es : ${orderID}`}</h4>
                <Link to='/'><h5>Realizar otra Compra</h5></Link>
              </div>

            )
          }
        </div>
      </div>
    </div>
    <div>
        <Footer></Footer>
    </div>
    </>
  )
}

export default CheckOut