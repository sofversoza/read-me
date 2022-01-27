import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BookCards from './BookCards'


function CategoryDisplay({ category, categoryContent }) {
    
    function generateCards(bookArray) {
        return (bookArray.map(book => <BookCards key={book.id} book={book} />))
    }
  
    return (
    <div>
        <Container className="mb-5 mt-5 flex-nowrap" > 
        <h1>{category}</h1>
            <Row className="row flex-nowrap" >
                {generateCards(categoryContent.all)}
            </Row>
        </Container>    
        <Container className="mb-5 mt-5 flex-nowrap"> 
        <h1>{category} - Nonfiction</h1>
            <Row className="row flex-nowrap">             
                {generateCards(categoryContent.nonfiction)}
            </Row>
        </Container>    
        <Container className="mb-5 mt-5 flex-nowrap"> 
        <h1>{category} - Fiction</h1>
            <Row className="row flex-nowrap">          
                {generateCards(categoryContent.fiction)}
            </Row>
        </Container>
    </div>
  )
}

export default CategoryDisplay
