import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import AccountDropdown from './AccountDropdown'

function NavigationBar({ setCategoryViewParams }) {

  function categoryDisplay(category) {
    setCategoryViewParams({detailView: false, category: category})
  }

  return (
      <div>
        <Navbar bg="light" variant='light' expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" onClick={e => categoryDisplay("Best Sellers")}>Best Sellers</Nav.Link>
                    <Nav.Link to="/" onClick={e => categoryDisplay("Highest Rated")}>Highest Rated</Nav.Link>
                    <Nav.Link to="/" onClick={e => categoryDisplay("New Releases")}>New Releases</Nav.Link>
                    <Nav.Link href="#home">Today's Deals</Nav.Link>
                    <Nav.Link href="#link">Cart</Nav.Link>
                    {/* ACCOUNT DROPDOWN */}
                    <AccountDropdown />
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}


export default NavigationBar
