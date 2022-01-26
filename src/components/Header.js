import React from 'react';
import {Button} from 'react-bootstrap'

function Header() {
  return (
    <div>

        <div>
            <img
                src='../images/logo-stack-sm.png'
                alt='logo'
                width='200'
                weight='200'
            />
            {/* BUTTON DARK/LIGHT MODE */}
            <Button >Light/Dark</Button>
        </div>
    </div>
  )
}


export default Header;
