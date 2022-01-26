import React, { useState, useEffect } from "react"
import NavigationBar from './NavigationBar'
import CategoryDisplay from "./CategoryDisplay";
import Search from "./Search";
import BookDetails from './BookDetails'


function Home({categoryViewParams, setCategoryViewParams}) {
  const [categoryContent, setCategoryContent] = useState({})

  useEffect(() => getCategoryContent(), [categoryViewParams])

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

  // function viewSelector() {
  //   if (categoryViewParams.detailView) {
  //     return (<BookDetails />)
  //   } else if (!!categoryContent.length) {
  //     return (<CategoryDisplay category={categoryViewParams.category} categoryContent={categoryContent} />)
  //   } else {
  //     return (<h1>Loading...</h1>)
  //   }
  // }


  return (
    <>
      <NavigationBar setCategoryViewParams={setCategoryViewParams} />
      <Search />
      {categoryViewParams.detailView ? <BookDetails /> : <></>}
      {!categoryViewParams.detailView && !!Object.keys(categoryContent).length ? <CategoryDisplay category={categoryViewParams.category} categoryContent={categoryContent} /> : <h1>Loading...</h1>}
    </>
  )
}

export default Home;
