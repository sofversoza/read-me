import React from 'react';
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { Rating } from '@mui/material';
import '../styles.css'


function CartRow({ book, cartData, setCartData, index, round }) {

    const subtotal = round(book.price * book.quantity, 2)
    const discount = `-${book.discount}%`
    const savings = round(book.price * book.quantity * (book.discount / 100), 2)
    const total = round(subtotal - savings, 2) 

    function handleAdd(e) {
        console.log(cartData)
       const updatedBook = {...book, quantity: (book.quantity + 1)}
       const updatedCartData = [...cartData]
       updatedCartData[index] = updatedBook
       setCartData(updatedCartData)
    }

    function handleSubtract(e) {
       const updatedBook = {...book, quantity: (!!book.quantity ? book.quantity - 1 : 0)}
       const updatedCartData = [...cartData]
       updatedCartData[index] = updatedBook
       setCartData(updatedCartData)
    }

    
    return (
    <Row style={{paddingBottom: '30px'}}>
        <Col sm={2}>
          <img
            src={book.image}
            width='140px'
            height='200px'
            alt='Cart'
          />
        </Col>
        <Col>
            <h4 id='h4'>{book.title}</h4>
            <Rating name="read-only size-small" value={book.rating} readOnly />
            <h5 id='h5'>{book.author}</h5>
            <h5 id='h5'>{book.genre}</h5>
            <h5 id='h5'>$ {book.price}</h5>
            <p className='mt-4'>Expected delivery to the United States in 8-13 business days</p>
        </Col>
        <Col sm={2}>
            <ButtonGroup aria-label="quantity" >
                <Button variant="secondary" onClick={e => handleAdd(e)}>+</Button>
                    <h3>{`${book.quantity}`}</h3>
                <Button variant="secondary" onClick={e => handleSubtract(e)}>-</Button>
            </ButtonGroup>
         
            <h5 id='h5' className='mb-4 mt-4'>Subtotal: ${subtotal}</h5>
            <h5 id='h5' className='mb-4 mt-4'>Discount: {discount} (${savings})</h5>
            <h5 id='h5' className='mb-4 mt-4'>Total: ${total} </h5>

            {/* <Button className='mt-4' variant='warning'>Remove</Button> */}
        </Col>
    </Row>
  )
}

export default CartRow;

