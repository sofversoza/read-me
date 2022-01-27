import React, {useState} from 'react';
import {Form, Container, FormControl, Button} from 'react-bootstrap'



function Login({ setUser }) {

    const [incorrect, setIncorrect] = useState(false)
    const [payload, setPayload] = useState({username: "", password: ""})

    function formChange(e) {
        if (e.target.id == "formBasicUsername") {
            setPayload({...payload, username: e.target.value})
            
        }
        if (e.target.id == "formBasicPassword") {
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
        <div>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={e => formChange(e)} value={payload.username} type="username" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => formChange(e)} value={payload.password} type="password" placeholder="Password" />
                </Form.Group>
                { incorrect ? errorMessage() : <></>}
                <Button onClick={e => loginPost(e)} variant="primary" type="submit">
                    Sign in
                </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;
