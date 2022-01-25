import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BookCards from './BookCards'


function CategoryDisplay() {
  return (
    <div>
        <Container className="mb-5 mt-5"> 
        <h1>Best Sellers</h1>
            <Row>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
            </Row>
        </Container>    

        <Container className="mb-5 mt-5"> 
        <h1>Non-Fiction Best Sellers</h1>
            <Row>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
            </Row>
        </Container>
        
        <Container className="mb-5 mt-5"> 
        <h1>Fiction Best Sellers</h1>
            <Row>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
                <Col>
                    <BookCards />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CategoryDisplay;
