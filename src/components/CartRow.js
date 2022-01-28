import React from 'react';
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { Rating } from '@mui/material';
import '../styles.css'


function CartRow({ book, cart, setCart, cartData, setCartData, index, round }) {

    const subtotal = round(book.price * book.quantity, 2)
    const discount = `${book.discount}%`
    const savings = round(book.price * book.quantity * (book.discount / 100), 2)
    const total = round(subtotal - savings, 2) 

    function handleAdd(e) {
        setCart([...cart, cart.find(cartItem => cartItem.id === book.id)])
        const updatedBook = {...book, quantity: (book.quantity + 1)}
        const updatedCartData = [...cartData]
        updatedCartData[index] = updatedBook
        setCartData(updatedCartData)
    }

    function handleSubtract(e) {
        const deleteIndex = cart.indexOf(cart.find(cartItem => cartItem.id === book.id))
        const updatedCart = [...cart]
        updatedCart.splice(deleteIndex, 1)
        setCart(updatedCart)
        if (book.quantity === 1) {
            const updatedCartData = cartData.filter(dataItem => dataItem.id !== book.id)
            setCartData(updatedCartData)
        } else {
            const updatedBook = {...book, quantity: (book.quantity - 1)}
            const updatedCartData = [...cartData]
            updatedCartData[index] = updatedBook
            setCartData(updatedCartData)
        }
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
            <p className='mt-4'>Expected delivery to the US in 3-5 business days</p>
        </Col>
        <Col sm={2}>
            <ButtonGroup aria-label="quantity" >
                <Button style={{height:'33px'}} variant="secondary" onClick={e => handleAdd(e)}>+</Button>
                    <h3 id='num-button' style={{paddingLeft:'6px', paddingRight:'6px', backgroundColor:'#D6D7D5'}}>{`${book.quantity}`}</h3>
                <Button style={{height:'33px'}} variant="secondary" onClick={e => handleSubtract(e)}>-</Button>
            </ButtonGroup>
         
            <h5 id='h5' className='mb-2 mt-2'>${subtotal}</h5>
            <h5 id='h5-discount' className='mb-2 mt-2'>{discount} Off (${savings})</h5>
            <h5 id='h5' className='mb-2 mt-4'>Total: ${total} </h5>

            {/* <Button className='mt-4' variant='warning'>Remove</Button> */}
        </Col>
    </Row>
  )
}

export default CartRow;

