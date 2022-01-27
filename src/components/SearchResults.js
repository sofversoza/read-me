import React, {useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import BookCards from './BookCards'

function SearchResults({searchResults, searchValues, setCart, cart}) {

    function generateResults() {
        const fullRowCount = Math.floor(searchResults.length / 5)
        let bookStart = 0
        const results = []
        for (let i = 1; i <= fullRowCount; i++) {
            results.push(
                <Row key={i} className="row flex-nowrap" >
                    <BookCards key={searchResults[bookStart].id} book={searchResults[bookStart]} cart={cart} setCart={setCart} />
                    <BookCards key={searchResults[bookStart + 1].id} book={searchResults[bookStart + 1]} cart={cart} setCart={setCart} />
                    <BookCards key={searchResults[bookStart + 2].id} book={searchResults[bookStart + 2]} cart={cart} setCart={setCart} />
                    <BookCards key={searchResults[bookStart + 3].id} book={searchResults[bookStart + 3]} cart={cart} setCart={setCart} />
                    <BookCards key={searchResults[bookStart + 4].id} book={searchResults[bookStart + 4]} cart={cart} setCart={setCart} />
                </Row>
            )
            bookStart = bookStart + 5
        }
        results.push(
            <Row key={0} className="row flex-nowrap" >
                {generateLastRow(bookStart)}
            </Row>
        )
        return (results)
    }

    function generateLastRow(bookStart) {
        const booksTotal = searchResults.length
        const lastRow = []
        for (let i = bookStart; i < booksTotal; i++) {
            lastRow.push(<BookCards key={searchResults[i].id} book={searchResults[i]} cart={cart} setCart={setCart} />)
        }
        return (lastRow)
    }

    return(
        <div>
            <h1>{searchResults[0] !== "No search results" ? searchResults.length : 0} results for: "{searchValues.query}" search by "{searchValues.searchBy.charAt(0).toUpperCase() + searchValues.searchBy.slice(1)}"...</h1>
            <Container className="mb-5 mt-5 flex-nowrap" >
                {searchResults[0] !== "No search results" ? generateResults() : <></>}
            </Container>
        </div>
    )
}

export default SearchResults