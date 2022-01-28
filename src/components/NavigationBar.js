import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AccountDropdown from './AccountDropdown'

function NavigationBar({ setCategoryViewParams, setSearchValues, setSearchResults, user }) {

  function categoryDisplay(category) {
    setSearchValues({query: '', searchBy: ''})
    setSearchResults([])
    setCategoryViewParams({detailView: false, category: category})
  }

  return (
      <Nav fill style={{ backgroundColor:'#DCC2AE', paddingTop:'30px', paddingBottom:'30px'}} >
        <Nav.Item className='mt-2'>
          <Link to="/" onClick={e => categoryDisplay("Best Sellers")} className='link-dark' style={{color:'black', textDecoration: 'none'}}>Best Sellers</Link>
        </Nav.Item>
        <Nav.Item className='mt-2'>
          <Link to="/" onClick={e => categoryDisplay("Highest Rated")} style={{color:'black', textDecoration: 'none'}}>Highest Rated</Link>
        </Nav.Item>
        <Nav.Item className='mt-2'>
          <Link to="/" onClick={e => categoryDisplay("New Releases")} style={{color:'black', textDecoration: 'none'}}>New Releases</Link>
        </Nav.Item>
        <Nav.Item className='mt-2'>
          <Link to="/" onClick={e => categoryDisplay("Deals")} style={{color:'black', textDecoration: 'none'}}>Deals</Link>
        </Nav.Item>
        <Nav.Item className='mt-2'>
          <Link to="/cart" style={{color:'black', textDecoration: 'none'}}>Cart</Link>
        </Nav.Item>
        <Nav.Item>
          <AccountDropdown user={user}/>
        </Nav.Item>
      </Nav>
  )
}


export default NavigationBar
