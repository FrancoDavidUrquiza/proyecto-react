import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home-principal'>
        <div className='home-right' data-aos="fade-right">
            <h4  >MI TIENDA ONLINE</h4>
            <h1>¡ Bienvenidos !</h1>
            <h4> Renovamos nuestra tienda para que tengas una mejor experiencia</h4>

        </div>
        <div className='home-left'>
            <img className='home-img' src='https://firebasestorage.googleapis.com/v0/b/proyecto-react-crochet.appspot.com/o/pexels-surene-palvie-2070676.jpg?alt=media&token=ddd34aa1-7f53-4d40-8856-ce55c3607380'></img>
        </div>
    </div>
  )
}

export default Home