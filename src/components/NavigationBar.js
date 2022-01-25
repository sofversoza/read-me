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

                    {/* <NavDropdown title="Books" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Author</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Genre</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Rating</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Publication</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Browse All Books</NavDropdown.Item>
                    </NavDropdown> */}
                    
                    {/* FOR USERS */}
                    {/* <NavDropdown title="My Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Wishlist</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Order Status</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Order History</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
                    </NavDropdown> */}

                    {/* FOR OWNER */}
                    {/* <NavDropdown title="My Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Inventory</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Stats</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Concerns</NavDropdown.Item>
                    </NavDropdown> */}

                    <Nav.Link href="#link">Cart</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}


export default NavigationBar
