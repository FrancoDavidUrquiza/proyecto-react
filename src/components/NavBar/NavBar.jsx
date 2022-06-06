import React from "react";
import CartWidget from "./CartWidget.js";
import { NavLink,Link } from 'react-router-dom'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

function NavBar(props) {
  return (
  <div className='contenedor-cabecera'>
    <div className="contenedor-logo">
        
      <NavLink to="/"><img className="contenedor-imagen" src={require("../../imagenes/logo-crochetera.png")} alt="Logo" /></NavLink>
        
    </div>
      <nav className="contenedor-navbar">
        <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/">Home</NavLink>
        {/* <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/">Contacto</NavLink> */}
        {/* <NavLink className={({isActive}) => (isActive ? 'contenedor-navbar-link-true' : 'contenedor-navbar-link') } to="/category/buzo">Buzos</NavLink> */}
        <Navbar  expand="lg">
          <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/category/gorro"  >Gorros</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/bufanda" >Bufandas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/buzo" >Buzos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
        <CartWidget />
      </nav>
  </div>
  
      
    
    
  );
  
  
}



export default NavBar;
