import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import CartRow from './CartRow'
import '../styles.css'

function Cart({cart, setCart, setCategoryViewParams, setSearchValues, setSearchResults}) {
    const [cartData, setCartData] = useState([])

    function round(num, places) {
        const factorOfTen = Math.pow(10, places);
        return Math.round(num * factorOfTen)/factorOfTen;
    }

    useEffect(() => {
        createCartData()
    }, [])

    function createCartData() {
        const idArray = []
        const idCounts = {}

        cart.forEach(cartItem => {
            if (!idArray.includes(cartItem.id)) {
                idArray.push(cartItem.id)
                idCounts[cartItem.id] = 1
            } else {
                idCounts[cartItem.id] += 1
            }
        })

       const distinctBooks = idArray.map((id) => {
           const book = cart.find(cartItem => cartItem.id === id)
           book.quantity = idCounts[id]
           return book
        })
        setCartData(distinctBooks)
    }

    function totalPrice() {
       let totalPrice = 0
       cart.forEach(cartItem => {
          totalPrice += cartItem.price * ((100 - cartItem.discount) / 100)
       })
       return round(totalPrice, 2)
    }

    return (
    <div>
      <NavigationBar 
        className=''
        setCategoryViewParams={setCategoryViewParams} 
        setSearchValues={setSearchValues} 
        setSearchResults={setSearchResults} 
      />
      <div style={{paddingTop: '35px'}}>
        <Container >
            <div style={{paddingTop: '30px'}}>
                <h1 id='heading'>Cart Items</h1>
                <div style={{paddingBottom: '20px', padding: '20px', backgroundColor: 'white', marginBottom:'30px'}}>
                <p id='pp'>You have {cart.length} items for a total of ${totalPrice()} in your cart.</p>
            </div>
                <Container style={{backgroundColor: 'white', paddingBottom: '15px', paddingTop: '30px', paddingLeft: '30px'}}>
                    {!!cartData.length ? cartData.map((book, index) => <CartRow round={round} index={index} key={index} book={book} cartData={cartData} setCartData={setCartData}/>) : <h1 id='empty'>Your cart is empty</h1>}
                </Container>
            </div>
            <div style={{paddingTop: '50px'}}>
                <h1 id='heading'>Checkout</h1>
            </div>

            {/* // CHECKOUT PORTION // */}
            <div className='justify-content-end' style={{paddingBottom: '30px', padding: '20px', backgroundColor: 'white', marginBottom:'100px'}}>
                {/* <p id='pp'>You have {cart.length} items for a total of ${totalPrice()} in your cart.</p>
                <Button variant='success'>Checkout</Button> */}
                <Row className="justify-content-md-center">
                   <Col></Col>
                   <Col></Col>
                   <Col style={{marginLeft: '250px'}} id='h3-checkout'><h3>Subtotal:</h3></Col>
                   <Col><h3 id='h3-checkout-p'>${totalPrice()}</h3></Col>
                </Row>
                <Row className="justify-content-md-center">
                   <Col></Col>
                   <Col></Col>
                   <Col style={{marginLeft: '250px'}} id='h3-checkout'><h3>Savings:</h3></Col>
                   <Col><h3 id='h3-checkout-p'>${totalPrice()}</h3></Col>
                </Row>
                <Row className="justify-content-md-center">
                   <Col></Col>
                   <Col></Col>
                   <Col style={{marginLeft: '250px'}} id='h3-checkout'><h3>Total:</h3></Col>
                   <Col><h3 id='h3-checkout-p'>${totalPrice()}</h3></Col>
                </Row>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Cart;
