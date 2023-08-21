import React from "react";
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation2() {
  return (
    <Navbar expand="false" className='navbar-2'>
        <Container>
            <Navbar.Brand>
            <img
                className="navbar-2-logo"
                alt="Logo"
                src="https://raw.githubusercontent.com/Evan-Roberts-808/Component-Library/114085227bb228a1561e9e2d67a1120ac483801a/.github/images/placeholder-imgs/placeholder-logo-full.svg"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="justify-content-end">
              </Offcanvas.Header>
              <Offcanvas.Body className='navbar-2-offcanvas'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>Link 1</Nav.Link>
                  <hr/>
                  <Nav.Link>Link 2</Nav.Link>
                  <hr/>
                  <Nav.Link>Link 3</Nav.Link>
                  <hr/>
                  <Nav.Link>Link 4</Nav.Link>
                  <hr/>
                  <Nav.Link>Link 5</Nav.Link>
                  <hr/>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default Navigation2