import React, {useState} from 'react';
import {  Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function AccountDropdown({user}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        My Account
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fs-4'>Hi there, {user.username}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 id='side-bar-text'>Wishlist</h6>
          <h6 id='side-bar-text'>Your Ratings</h6>
          <h6 id='side-bar-text'>Order Status</h6>
          <h6 id='side-bar-text'>Order History</h6>
          <h6 id='side-bar-text'>Account Settings</h6>
          <h6 id='side-bar-text'>Log out</h6>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default AccountDropdown;
