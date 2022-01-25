import React from 'react';
import {Button} from 'react-bootstrap'


function AccountDetails() {
  return (
      <>
    <div>
        <h1>My Account</h1>
        <h1>Hi, ${}</h1>
    </div>
    <div>
        <h1>Account Details</h1>
        <h3>Name</h3>
        <input></input>
        <h3>Username</h3>
        <input></input>
        <h3>Password</h3>
        <input></input>
        <h3>Email Address</h3>
        <input></input>
        <h3>Phone Number</h3>
        <input></input>
        <h3>Delivery Address</h3>
        <input></input>
        <Button className='mb-4'>Save Changes</Button>
    </div>
    <div>
        <h1>Delete Account</h1>
        <Button className='mb-4'>Deactivate</Button>
    </div>
    </>
  )
}

export default AccountDetails;
