import React, {useState} from 'react';
import {Form, Container, Image, Button} from 'react-bootstrap'



function Login({ setUser }) {

    const [incorrect, setIncorrect] = useState(false)
    const [payload, setPayload] = useState({username: "", password: ""})

    function formChange(e) {
        if (e.target.id === "formBasicUsername") {
            setPayload({...payload, username: e.target.value})
            
        }
        if (e.target.id === "formBasicPassword") {
            setPayload({...payload, password: e.target.value})
        }
    }
    
    function loginPost(e) {
        e.preventDefault()
        const postObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
        fetch("http://localhost:9292/login", postObj)
        .then(resp => resp.json())
        .then(userObj => handleIncorrect(userObj))
    }

    function handleIncorrect(userObj) {
        if (Object.keys(userObj).length > 1) {
            setIncorrect(false)
            setPayload({username: "", password: ""})
            setUser(userObj)
        } else {
            setIncorrect(true)
            setPayload({username: "", password: ""})
        }
    }

    function errorMessage() {
        return(
            <Form.Text className="text-muted"> {/*red error message*/}
            Incorrect username or password. Please try again.
            </Form.Text>
        )
    }

    
    return (
        <Container id='form-container' className='d-grid h-100 justify-content-center'>
            <Form id='sign-in-form' className='text-center'>
                <Image src='../images/logo-open-md.png' height='280' width='280' className='mb-4'/>
                <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '-30px', height: '290px', width: '310px'}}>
                    <h1 id='heading' style={{paddingTop: '15px'}}>Please sign in</h1>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control onChange={e => formChange(e)} value={payload.username} type="username" placeholder="Username or Email"/>
                        <Form.Text className="text-muted">
                        {/* We'll never share your email with anyone else */}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={e => formChange(e)} value={payload.password} type="password" placeholder="Password"/>
                    </Form.Group>
                    { incorrect ? errorMessage() : <></>}
                    <Button onClick={e => loginPost(e)} variant="primary" type="submit" className='mb-4 mt-2'>
                        Sign in
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Login;
