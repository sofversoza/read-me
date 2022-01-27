import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import AccountDropdown from './AccountDropdown'

function NavigationBar({ setCategoryViewParams, setSearchValues, setSearchResults }) {

  function categoryDisplay(category) {
    setSearchValues({query: '', searchBy: ''})
    setSearchResults([])
    setCategoryViewParams({detailView: false, category: category})
  }

  return (
      <Nav style={{ backgroundColor:'#DCC2AE'}} fill variant="tabs">
        <Nav.Item>
          <Nav.Link to="/" onClick={e => categoryDisplay("Best Sellers")} eventKey="1" style={{color:'black'}}>Best Sellers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/" onClick={e => categoryDisplay("Highest Rated")} eventKey="2" style={{color:'black'}}>Highest Rated</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/" onClick={e => categoryDisplay("New Releases")} eventKey="3" style={{color:'black'}}>New Releases</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/" onClick={e => categoryDisplay("Deals")} eventKey="4" style={{color:'black'}}>Deals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/cart" eventKey="5" style={{color:'black'}}>Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <AccountDropdown />
        </Nav.Item>
      </Nav>
  )
}


export default NavigationBar
