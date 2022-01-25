import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BookCards from './BookCards'


function CategoryDisplay({ categoryContent }) {
  
  
    return (
    <div>
        <Container className="mb-5 mt-5"> 
        <h1>Best Sellers</h1>
            <Row>
                <BookCards />
                <BookCards />
                <BookCards />    
                <BookCards />            
                <BookCards />
            </Row>
        </Container>    
        <Container className="mb-5 mt-5"> 
        <h1>Non-Fiction Best Sellers</h1>
            <Row>            
                <BookCards />            
                <BookCards />             
                <BookCards />            
                <BookCards />            
                <BookCards />
            </Row>
        </Container>    
        <Container className="mb-5 mt-5"> 
        <h1>Fiction Best Sellers</h1>
            <Row>          
                <BookCards />            
                <BookCards />            
                <BookCards />           
                <BookCards />           
                <BookCards />
            </Row>
        </Container>
    </div>
  )
}

export default CategoryDisplay
