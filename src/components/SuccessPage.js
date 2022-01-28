import React from 'react';
import '../styles.css'
import { Container, Form, Image } from 'react-bootstrap'


function SuccessPage() {
  return (
    <Container>
        <Form className='text-center'>
          <Image src='../images/logo-open-md.png' height='280' width='280' className='mb-4'/>
            <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '-30px', height: '290px', width: '310px'}}>
              <h1 id='heading' style={{paddingTop: '15px', paddingBottom: '15px'}}>Your order Confirmed!</h1>
              <p id='success-page-p'>Hello, Sofia</p>
              <p id='success-page-p'>You order has been confirmed and will be shipped in next two days!</p>
            </div>
            <div style={{paddingTop: '20px', paddingBottom: '20px'}}> 
                <h3 id='success-h3'>Order Number</h3>
                <p id='success-page-p'>MTIP36243647928374</p>
            </div>
            <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <h3 id='success-h3'>Order Date</h3>
                <p id='success-page-p'>Jan 28, 2022</p>
            </div>
            <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <h3 id='success-h3'>Thanks for shopping with us!</h3>
                <p id='success-page-p'>We will be sending you a shipping confirmation email when the order shipped successfully!</p>
            </div>
        </Form>
    </Container>
  )
}


export default SuccessPage;
