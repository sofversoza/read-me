import React, {useState} from 'react';
import { Form, Button, FormControl, Container } from 'react-bootstrap'


function Search({setSearchValues, searchToggle, setSearchToggle}) {
  const [search, setSearch] = useState({query: '', searchBy: "title"})
  
  function handleSearch(e) {
      e.preventDefault()
      setSearchValues({...search})
        setSearch({query: '', searchBy: "title"})
      setSearchToggle(!searchToggle)
      e.target.reset()
    }

    return (
    <div style={{paddingTop: '20px'}}>
        <Container>
        <Form className="d-flex" onSubmit={e => handleSearch(e)} >
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search.query}
                name='search'
                onChange={e => setSearch({...search, query: e.target.value})}
            />
            <div className='d-flex flex-column justify-content-center' style={{ paddingRight: '20px', paddingLeft: '20px', width: '280px'}}>
                <div className='justify-content-center'>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault1"
                        value='title'
                        onChange={e => setSearch({...search, searchBy: e.target.value})}
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Title</label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault2"
                        value='author'
                        onChange={e => setSearch({...search, searchBy: e.target.value})}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Author</label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault3"
                        value='genre'
                        onChange={e => setSearch({...search, searchBy: e.target.value})}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Genre</label>
                </div>
                <Button 
                    type='submit'
                    variant='info' 
                    className='justify-content-center' 
                    style={{color: 'white', width: '150px', height: '45px'}}
                >Search</Button>
            </div>
        </Form>
        </Container>
    </div>
  )
}

export default Search
