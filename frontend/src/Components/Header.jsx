import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <Navbar.Brand>EpicDrop</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to="/cart" style={{ textDecoration: 'none'}}>
            <Nav.Link as="span">
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none'}}>
            <Nav.Link as="span">
              <i className='fas fa-user'></i> Login
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;