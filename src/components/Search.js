import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'


function Search() {
  return (
    <div>
        <Form className="d-flex" >
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Author
            </label>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Title
            </label>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Genre
            </label>
            <Button variant='info' style={{color: 'white'}}>Search</Button>
        </Form>
    </div>
  )
}

export default Search
