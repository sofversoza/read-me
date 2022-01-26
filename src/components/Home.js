import React, { useState, useEffect } from "react"
import NavigationBar from './NavigationBar'
import CategoryDisplay from "./CategoryDisplay";
import Search from "./Search";
import BookDetails from './BookDetails'


function Home({categoryViewParams, setCategoryViewParams}) {
  const [categoryContent, setCategoryContent] = useState([])

  useEffect(() => getCategoryContent(), [])

  function getCategoryContent() {
    fetch(`http://localhost:9292/${endpoint()}`)
    .then(resp => resp.json())
    .then(content => console.log(content))
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

  function viewSelector() {
    if (categoryViewParams.detailView) {
      return (<BookDetails />)
    // } else {
    //   return (<CategoryDisplay category={categoryViewParams.category} categoryContent={categoryContent} />)
    }
  }


  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} />
      <Search />
      {viewSelector()}
    </>
  )
}

export default Home;
