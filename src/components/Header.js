import React from 'react';
import NavigationBar from './NavigationBar'
import AccountDropdown from './AccountDropdown'
import {Button} from 'react-bootstrap'

function Header() {
  return (
    <div>

        <div>
            {/* BUTTON DARK/LIGHT MODE */}
            <Button >Test</Button>
            <img
                src='../images/logo-stack-sm.png'
                alt='logo'
                width='200'
                weight='200'
            />

            {/* ACCOUNT DROPDOWN */}
            <AccountDropdown />
        </div>
            <NavigationBar />
    </div>
  )
}


export default Header;
