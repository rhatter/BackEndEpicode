import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../img/logo.png";

import "./NavBar.css";

function MyNavBar({}) {
  const [logged, setLogged] = useState(true);

  const createLoginButtons = () => {
    return [
      <Nav.Link href="/Login">Accedi</Nav.Link>,
      <Nav.Link href="/Signin">Registrati</Nav.Link>,
    ];
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary NavBar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logoImg} alt="bookLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              {logged && createLoginButtons()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNavBar;
