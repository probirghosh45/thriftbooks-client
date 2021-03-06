import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link,useParams } from "react-router-dom";

const AdminNavbar = () => {

    const {adminPanel} = useParams();

  return (
    <>
      <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <NavbarBrand>
            <h2>
              {adminPanel==="addBook"? "Add Book" 
               :adminPanel==="editBook" ? "Edit Book"
               :"Manage Book"  
            }
            </h2>
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
    </>
  );
};

export default AdminNavbar;
