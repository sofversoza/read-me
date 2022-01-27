import React, { useState, useEffect, useRef } from "react"
import NavigationBar from './NavigationBar'
import CategoryDisplay from "./CategoryDisplay";
import Search from "./Search";
import BookDetails from './BookDetails'
import SearchResults from './SearchResults'


function Home({categoryViewParams, setCategoryViewParams, setCart, cart, searchResults, setSearchResults, searchValues, setSearchValues}) {
  const firstLoad = useRef(true)
  const [categoryContent, setCategoryContent] = useState({})
  const [searchToggle, setSearchToggle] = useState(false)
  

  useEffect(() => getCategoryContent(), [categoryViewParams])

  useEffect(() => {
    if (firstLoad.current === false && !!searchValues.query) {
      getSearchResults({...searchValues})
    } else {
      firstLoad.current = false
    }
  }, [searchValues])

  function getCategoryContent() {
    fetch(`http://localhost:9292/${endpoint()}`)
    .then(resp => resp.json())
    .then(content => setCategoryContent(content))
  }

  function endpoint() {
    const category = categoryViewParams.category
    if (category === "Best Sellers") {
      return("best_sellers")
    }
    if (category === "Highest Rated") {
      return("highest_rated")
    }
    if (category === "New Releases") {
      return("new_releases")
    }
    if (category === "Deals") {
      return("deals")
    }
  }

  function getSearchResults(payload) {
    const postObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    fetch(`http://localhost:9292/search`, postObj) 
    .then(resp => resp.json())
    .then(content => setSearchResults(content))
  }

  function viewSelector() {
    if (categoryViewParams.detailView) {
      return(<BookDetails setCart={setCart} cart={cart} />)
    } else if (!categoryViewParams.detailView && !!Object.keys(searchResults).length) {
      return(
        <>
          {!categoryViewParams.detailView && !!Object.keys(searchResults).length ? <SearchResults searchResults={searchResults} searchValues={searchValues} setCart={setCart} cart={cart}/> : <h1>Loading...</h1>}
        </>
      )
    } else {
      return(
        <>
          {!!Object.keys(categoryContent).length ? <CategoryDisplay category={categoryViewParams.category} categoryContent={categoryContent} setCart={setCart} cart={cart} /> : <h1>Loading...</h1>}
        </>
      )
    }
  }

  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} setSearchValues={setSearchValues} setSearchResults={setSearchResults}/>
      <Search setSearchValues={setSearchValues} searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
      {viewSelector()}
    </>
  )
}

export default Home;
