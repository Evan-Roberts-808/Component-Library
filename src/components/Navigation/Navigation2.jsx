import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaSquareBehance,
  FaSquareGithub,
  FaEtsy,
} from "react-icons/fa6";

function Navigation2() {
  return (
    <Navbar expand="false" className="navbar-2">
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
          <Offcanvas.Header
            closeButton
            className="justify-content-end navbar-2-offcanvas"
          ></Offcanvas.Header>
          <Offcanvas.Body className="navbar-2-offcanvas">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="navbar-2-link">Link 1</Nav.Link>
              <hr />
              <Nav.Link className="navbar-2-link">Link 2</Nav.Link>
              <hr />
              <Nav.Link className="navbar-2-link">Link 3</Nav.Link>
              <hr />
              <Nav.Link className="navbar-2-link">Link 4</Nav.Link>
              <hr />
              <Nav.Link className="navbar-2-link">Link 5</Nav.Link>
              <hr />
              <p className="navbar-2-text">External Links</p>
              <div className="navbar-2-icons">
                <a href="#" target="_blank" className="navbar-2-icons-anchor">
                  <FaLinkedin className="navbar-2-icon" />
                </a>
                <a href="#" target="_blank" className="navbar-2-icons-anchor">
                  <FaSquareBehance className="navbar-2-icon" />
                </a>
                <a href="#" target="_blank" className="navbar-2-icons-anchor">
                  <FaSquareGithub className="navbar-2-icon" />
                </a>
                <a href="#" target="_blank" className="navbar-2-icons-anchor">
                  <FaEtsy className="navbar-2-icon" />
                </a>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation2;
