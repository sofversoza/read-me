import React from 'react';
import { Card, Button, Col } from 'react-bootstrap'


function BookCards({ book }) {
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={book.image} />
        <Card.Body>
          <Card.Title className='mb-2'>Book Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Author</Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>Genre</Card.Subtitle>
          <Card.Link className='mb-2' href=''>Add to Wishlist</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BookCards;
