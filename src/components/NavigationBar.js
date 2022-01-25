import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'



function NavigationBar() {
  return (
      <div>
        <Navbar bg="light" variant='light' expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Best Sellers</Nav.Link>
                    <Nav.Link href="#home">Highest Rated</Nav.Link>
                    <Nav.Link href="#home">New Releases</Nav.Link>
                    <Nav.Link href="#home">Today's Deals</Nav.Link>
                    <Nav.Link href="#link">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}


export default NavigationBar
