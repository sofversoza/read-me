import React from 'react';
import {Button} from 'react-bootstrap'


function CheckoutPage() {
  return (
    <>
    <div>
      <h1>Checkout</h1>
      <h2>Email address (for order confirmation)</h2>
      <input>email@example.com</input>
    </div>

    <div>
      <h1>Choose a payment type</h1>
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
