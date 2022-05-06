import React from "react";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget.js";
function NavBar(props) {
  return (
  <div className='contenedor-cabecera'>
    {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beth-Crochetera</Navbar.Brand>
          <img className="contenedor-imagen" src={require("../../imagenes/logo-crochetera.png")} alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Acerca de mi</Nav.Link>
              <CartWidget></CartWidget>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Gorros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Bufandas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Otros
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      
      <div className="contenedor-logo">
        <a href="NavBar.jsx">
          <img className="contenedor-imagen" src={require("../../imagenes/logo-crochetera.png")} alt="Logo" />
        </a>
      </div>
      <nav className="contenedor-navbar">
        <a href="..">Sobre Mi</a>
        <a href="..">Productos</a>
        <a href="..">Contactos</a>
        <CartWidget />
      </nav>
  </div>
  
      
    
    
  );
  
  
}



export default NavBar;
