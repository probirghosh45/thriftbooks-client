import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark" style={{ backgroundColor:"#224230" }}>
        <Container>
          <Navbar.Brand as={Link}  to="/" >Thriftbooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link}  to="/" >Home</Nav.Link>
              <Nav.Link as={Link}  to="/order" >Orders</Nav.Link>
              <Nav.Link as={Link}  to="/admin" >Admin</Nav.Link>
              <Nav.Link as={Link}  to="/deal">Deal</Nav.Link>
              <Nav.Link as={Link}  to="/login" >Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
