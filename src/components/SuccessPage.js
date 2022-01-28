import React, {useEffect} from 'react';
import '../styles.css'
import { Container, Form } from 'react-bootstrap'
import NavigationBar from './NavigationBar'


function SuccessPage({setCategoryViewParams, setSearchValues, setSearchResults, setCart, user}) {
  
    useEffect(() => {
        setCart([])
    }, [])
  
    return (
    <>
    <NavigationBar 
        className=''
        setCategoryViewParams={setCategoryViewParams} 
        setSearchValues={setSearchValues} 
        setSearchResults={setSearchResults} 
        user={user}
    />
    <Container id='success-form-container' className='d-grid h-100 justify-content-center'>
        <Form className='text-center' id='success-form'>
            <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', height: '440px', width: '365px'}}>
              <h1 id='success-heading' style={{paddingTop: '15px', paddingBottom: '10px'}}>Your order is confirmed!</h1>
              <p id='success-page-p'>Hello, {user.username}</p>
              <p id='success-page-p'>You order has been confirmed and will be shipped in the next two days!</p>
              <h3 id='success-h3'>Order Number</h3>
              <p id='success-page-p'>MTIP36243647928374</p>
              <h3 id='success-h3'>Order Date</h3>
              <p id='success-page-p'>Jan 28, 2022</p>
              <h3 id='success-h3' style={{paddingTop: '15px'}}>Thanks for shopping with us!</h3>
              <p id='success-page-p'>We will be sending you a shipping confirmation email when the order has shipped successfully!</p>
            </div>
        </Form>
    </Container>
    </>  
  )
}


export default SuccessPage;
