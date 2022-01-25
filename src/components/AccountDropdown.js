import React from 'react';
import { NavDropdown  } from 'react-bootstrap'


function AccountDropdown() {
  return (
    <div>
        <NavDropdown title="My Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Wishlist</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Current Rentals</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Rental History</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Account Details</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
        </NavDropdown>
    </div>
  )
}

export default AccountDropdown;
