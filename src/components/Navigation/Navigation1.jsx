import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation1() {
  return (
    <Navbar expand="lg" className="navbar-1">
      <Container>
        <Navbar.Brand>
          <img
            className="navbar-1-logo"
            alt="Logo"
            src="https://raw.githubusercontent.com/Evan-Roberts-808/Component-Library/114085227bb228a1561e9e2d67a1120ac483801a/.github/images/placeholder-imgs/placeholder-logo-full.svg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="navbar-1-link">Link 1</Nav.Link>
            <Nav.Link className="navbar-1-link">Link 2</Nav.Link>
            <Nav.Link className="navbar-1-link">Link 3</Nav.Link>
            <Nav.Link className="navbar-1-link">Link 4</Nav.Link>
            <Nav.Link className="navbar-1-link">Link 5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation1;
