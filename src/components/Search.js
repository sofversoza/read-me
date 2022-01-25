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
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Author
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Title
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Genre
            </label>
            <Button variant='info' style={{color: 'white'}}>Search</Button>
        </Form>
    </div>
  )
}

export default Search
