import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark" style={{ backgroundColor:"#224230" }}>
        <Container>
          <Navbar.Brand href="#home">Thriftbooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Orders</Nav.Link>
              <Nav.Link href="/">Admin</Nav.Link>
              <Nav.Link href="/">Deal</Nav.Link>
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
