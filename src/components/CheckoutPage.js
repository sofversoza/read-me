import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import NavigationBar from './NavigationBar'


function CheckoutPage({ user, cart, setCategoryViewParams, setSearchValues, setSearchResults }) {
  const [checkoutDetails, setCheckoutDetails] = useState({confirmationEmail: user.email})

  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} setSearchValues={setSearchValues} setSearchResults={setSearchResults} />
      <h1>Checkout</h1>
      <div>
        <label>User name: {user.username}</label>
        <label htmlFor='confirmationEmail' >Email address:</label>
        <input name='confirmationEmail' value={checkoutDetails.confirmationEmail} onChange={e => setCheckoutDetails({...checkoutDetails, confirmationEmail: e.target.value})}></input>
        <label htmlFor='confirmationEmail' >(for order confirmation)</label>
      </div>
      <div>
        <h2>Payment</h2>
        <input>CVV for chosen card</input>
      </div>
      <div>
        <h1>Choose Delivery Address</h1>
        <input>Street Address</input>
        <input>Line 2</input>
      </div>
      <Button variant="success">Buy now</Button>
    </>
  )
}

export default CheckoutPage;
