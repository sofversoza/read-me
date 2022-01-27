import React from 'react';
import NavigationBar from './NavigationBar'
import { Button, Image } from 'react-bootstrap'


function Header() {
  return (
    <>
    <div style={{backgroundColor: '#C1D2DF'}}>
      <div className="d-flex justify-content-end align-items-center" style={{paddingRight: '10px', paddingTop: '10px'}}>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
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
