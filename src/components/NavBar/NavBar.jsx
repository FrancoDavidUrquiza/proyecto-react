import React from "react";
import CartWidget from "./CartWidget.js";
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

function NavBar(props) {
  return (
  <div className='contenedor-cabecera'>
    <div className="contenedor-logo">
        
          <NavLink to="/"><img className="contenedor-imagen" src={require("../../imagenes/logo-crochetera.png")} alt="Logo" /></NavLink>
        
      </div>
      <nav className="contenedor-navbar">
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/category/gorro">Gorros</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/category/bufanda">Bufandas</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/category/buzo">Buzos</NavLink>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Productos
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NavLink to="/category/gorro"><Dropdown.Item >Gorros</Dropdown.Item></NavLink>
            <NavLink to="/category/bufanda"><Dropdown.Item >Bufandas</Dropdown.Item></NavLink>
            <NavLink to="/category/buzo"><Dropdown.Item >Buzos</Dropdown.Item></NavLink>
          </Dropdown.Menu>
        </Dropdown> */}
        
        <CartWidget />
      </nav>
  </div>
  
      
    
    
  );
  
  
}



export default NavBar;
