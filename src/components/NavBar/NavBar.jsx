import React from "react";
import CartWidget from "./CartWidget.js";
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  return (
  <div className='contenedor-cabecera'>
    <div className="contenedor-logo">
        <a href="NavBar.jsx">
          <img className="contenedor-imagen" src={require("../../imagenes/logo-crochetera.png")} alt="Logo" />
        </a>
      </div>
      <nav className="contenedor-navbar">
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/SobreMi">Sobre Mi</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/category/productos">Productos</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/Contacto">Contacto</NavLink>
        <CartWidget />
      </nav>
  </div>
  
      
    
    
  );
  
  
}



export default NavBar;
