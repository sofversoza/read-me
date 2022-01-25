import React, {useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap'
import CartRow from './CartRow'


function Cart({cart}) {
  
    function generateCartItems() {
        cart.map(item => {
            <CartRow item={item} />
        })
    }

    return (
    <div>
        <div>
        <h1>Your Cart</h1>
        <p>You have ${} items for a total of $ ${} in your cart.</p>
        <Button variant='success'>Checkout</Button>
        </div>
        <Container>
            {generateCartItems()}
        </Container>
        <div>
            <h2>Delivery Cost</h2>
            <h2>FREE</h2>
            <h2>Total</h2>
            <h2>$ ${}</h2>
            <Button variant='success'>Checkout</Button>
        </div>
    </div>
  )
}

export default Cart;
