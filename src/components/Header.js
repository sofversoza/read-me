import React, {useState} from 'react';
import NavigationBar from './NavigationBar'
import { Button, Image, Offcanvas, Container } from 'react-bootstrap'


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
    <div style={{backgroundColor: '#C1D2DF'}}>
      <div className="d-flex justify-content-end align-items-center" style={{paddingRight: '10px', paddingTop: '10px'}}>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        <div>
      <Button size='lg' variant="outline" onClick={handleShow}>
        My Account
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fs-4'>Hi there, Sofia</Offcanvas.Title>
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
      </div>
      </div>
    </div>
    <div style={{backgroundColor: '#C1D2DF'}}>
        <div className="d-flex justify-content-around align-items-center">
          <Image src='../images/logo-open-md.png' height='260' width='260'/>
        </div>
    </div>
    </>
  )
}

export default Header;
