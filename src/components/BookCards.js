import React from 'react';
import { Card, Button, Col } from 'react-bootstrap'


function BookCards({ book, cart, setCart }) {
  return (
    <Col>
      <Card style={{ height: '400px', width: '180px'}}> 
        <Card.Img variant='top' src={book.image} width='165.51' height='255'/>
        <Card.Body>
          <Card.Title className='mb-2'>Book Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Author</Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>Genre</Card.Subtitle>
          <Card.Link className='mb-4' href=''>Add to Wishlist</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BookCards;
