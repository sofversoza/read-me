import React, { useState, useEffect, useRef } from "react"
import NavigationBar from './NavigationBar'
import CategoryDisplay from "./CategoryDisplay";
import Search from "./Search";
import BookDetails from './BookDetails'


function Home({categoryViewParams, setCategoryViewParams}) {
  const firstLoad = useRef(true)
  const [categoryContent, setCategoryContent] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [searchValues, setSearchValues] = useState({query: '', searchBy: ''})

  useEffect(() => getCategoryContent(), [categoryViewParams])

  useEffect(() => {
    if (firstLoad.current == false) {
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
    if (category == "Best Sellers") {
      return("best_sellers")
    }
    if (category == "Highest Rated") {
      return("highest_rated")
    }
    if (category == "New Releases") {
      return("new_releases")
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
    .then(content => console.log(content))
  }

  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} />
      <Search setSearchValues={setSearchValues} />
      {categoryViewParams.detailView ? <BookDetails /> : <></>}
      {!categoryViewParams.detailView && !!Object.keys(categoryContent).length ? <CategoryDisplay category={categoryViewParams.category} categoryContent={categoryContent} /> : <h1>Loading...</h1>}
    </>
  )
}

export default Home;
