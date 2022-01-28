import React from 'react';
import { Card, Button, Col } from 'react-bootstrap'
import '../styles.css'


function BookCards({ book, cart, setCart }) {

  function addToCart() {
    console.log('Added to cart')
    setCart([...cart, book])
    
  }

  return (
    <>
    <Col>
      <Card id='card' style={{ height: '420px', width: '190px'}}> 
        <Card.Img variant='top' src={book.image} width='165.51' height='255'/>
        <Card.Body className='overflow-auto'>
          <Card.Title className='mb-2 text-wrap' id='card-title'>{book.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted' >{book.author}</Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>{book.genre}</Card.Subtitle>
          <div >
            <Card.Link className='mb-4 '>Add to Wishlist</Card.Link>
          </div>
          <div className='mb-2'>
            <Card.Link className='mb-4' onClick={addToCart}>Add to Cart</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default BookCards;
