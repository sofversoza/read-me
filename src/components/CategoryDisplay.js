import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BookCards from './BookCards'


function CategoryDisplay({ category, categoryContent }) {
    
    function generateCards(bookArray) {
        //return (bookArray.map(book => <BookCards book={book} />))
    }
  
    return (
    <div>
        <Container className="mb-5 mt-5"> 
        <h1>{category}</h1>
            <Row>
                {generateCards(categoryContent.all)}
            </Row>
        </Container>    
        <Container className="mb-5 mt-5"> 
        <h1>{category} - Nonfiction</h1>
            <Row>            
                {generateCards(categoryContent.nonfiction)}
            </Row>
        </Container>    
        <Container className="mb-5 mt-5"> 
        <h1>{category} - Fiction</h1>
            <Row>          
                {generateCards(categoryContent.fiction)}
            </Row>
        </Container>
    </div>
  )
}

export default CategoryDisplay
