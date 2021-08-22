import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import AddBooks from "../ManageBooks/AddBooks";
import ManageBooks from "../ManageBooks/ManageBooks";
const AdminNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <NavbarBrand>
            <h2>Manage Books</h2>
          </NavbarBrand>
          <NavbarCollapse className=" justify-content-end ">
            <Nav className="">
              <Nav.Link
                as={Link}
                to="/"
                className="ms-5"
                style={{ color: "#000" }}
              >
                <h2>Home</h2>
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      {/* <ManageBooks /> */}
      <AddBooks/>
    </>
  );
};

export default AdminNavbar;
