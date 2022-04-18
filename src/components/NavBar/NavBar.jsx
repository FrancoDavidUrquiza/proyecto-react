import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function NavBar(props) {
  return (
  <div className='contenedor-cabecera'>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beth-Crochetera</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Acerca de mi</Nav.Link>
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
      </Navbar>
      </div>
    
    
  );
  
  
}



export default NavBar;
