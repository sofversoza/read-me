import React from 'react';
import {Container, Button} from 'react-bootstrap'


function BookDetails() {
  return (
      <>
        <div>
            <h1>${} Details</h1>
            <Container>
                <img
                    src=''
                    alt='Book Details'
                    width=''
                    height=''
                />
                <h2>Title</h2>
                <h3>Author</h3>
                <h3>Rating</h3>
                <p>Description</p>
            </Container>
            <Button href=''>Add to Wishlist</Button>
            <Button href=''>Add to Cart</Button>
        </div>
    </>
  )
}

export default BookDetails;
