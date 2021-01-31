import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Container>
    <Navbar expand="lg" variant="dark" bg="primary" sticky="top" >
      <Navbar.Brand href="#home">Custom Search</Navbar.Brand>
    </Navbar>
  </Container>
  );
}
