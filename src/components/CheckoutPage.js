import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import { Container, Image, Row, Col, InputGroup, FormControl } from 'react-bootstrap'


function CheckoutPage({ user, cart, setCategoryViewParams, setSearchValues, setSearchResults }) {
  const [checkoutDetails, setCheckoutDetails] = useState({confirmationEmail: user.email})

  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} setSearchValues={setSearchValues} setSearchResults={setSearchResults} />
      <h1>Checkout</h1>
      <div>
        <label>User name: {user.username}</label>
        <label htmlFor='confirmationEmail' >Email address:</label>
        <input name='confirmationEmail' value={checkoutDetails.confirmationEmail} onChange={e => setCheckoutDetails({...checkoutDetails, confirmationEmail: e.target.value})}></input>
        <label htmlFor='confirmationEmail' >(for order confirmation)</label>
      </div>
      <div>
        <h2>Payment</h2>
        <input>CVV for chosen card</input>
      </div>
      <div>
        <h1>Choose Delivery Address</h1>
        <input>Street Address</input>
        <input>Line 2</input>
      </div>
      <Button variant="success">Buy now</Button>
    
      {/* <Container>
            <Row>
              <h1 style={{paddingBottom: '40px', paddingTop: '40px'}}>Payment Details</h1>
                <Col>
                    <InputGroup className='mb-3'>
                        <p>Email address for order confirmation*</p>
                        <FormControl
                            placeholder="Email address"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                  <h1 style={{paddingBottom: '40px', paddingTop: '40px'}}>Choose a payment card</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="saved-card" id="saved-card" value="option1" checked/>
                        <label className="form-check-label" for="card-payment">
                            Saved Card
                        </label>
                    </div>            
                </Col>
                <Col>
                    <Form>
                    <div className="form-row">
                        <div className="col-7">
                            <input type="text" className="form-control" placeholder="Card Number"/>
                                </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Exp "/>
                                    </div>
                                <div className="col">
                            <input type="text" className="form-control" placeholder="Zip"/>
                        </div>
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container> */}
    </>    
  )
}

export default CheckoutPage;
