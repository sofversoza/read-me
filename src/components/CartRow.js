import React, {useState} from 'react';
import { Row, Button} from 'react-bootstrap'


function CartRow({ item }) {
  
  
    return (
    <Row>
        <img
            src='../images/book.jpg'
            width='200px'
            height='180px'
            alt='Cart'
        />
        <div>
            <h2>Title</h2>
            <h3>Author</h3>
            <h3>Rating</h3>
            <h3>Genre</h3>
            <h2>$ ${}</h2>
        </div>
        <div>
            <h4>Quantity</h4>
            <h2>$ ${}</h2>
            <Button variant='warning'>Remove</Button>
        </div>
    </Row>
  )
}

export default CartRow;
