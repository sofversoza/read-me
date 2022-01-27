import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
          <Link to="/" onClick={e => categoryDisplay("Best Sellers")} eventKey="1" style={{color:'black', textDecoration: 'none'}}>Best Sellers</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" onClick={e => categoryDisplay("Highest Rated")} eventKey="2" style={{color:'black', textDecoration: 'none'}}>Highest Rated</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" onClick={e => categoryDisplay("New Releases")} eventKey="3" style={{color:'black', textDecoration: 'none'}}>New Releases</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" onClick={e => categoryDisplay("Deals")} eventKey="4" style={{color:'black', textDecoration: 'none'}}>Deals</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/cart" eventKey="5" style={{color:'black', textDecoration: 'none'}}>Cart</Link>
        </Nav.Item>
        <Nav.Item>
          <AccountDropdown />
        </Nav.Item>
      </Nav>
  )
}


export default NavigationBar
