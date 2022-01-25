import React from 'react';
import { Card, Button } from 'react-bootstrap'


function BookCards() {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src='../images/book.jpg' />
        <Card.Body>
          <Card.Title className='mb-2'>Book Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Author</Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>Genre</Card.Subtitle>
          <Card.Link className='mb-2' href=''>Add to Wishlist</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BookCards;
