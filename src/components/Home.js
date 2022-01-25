import React, { useState } from "react"
import CategoryDisplay from "./CategoryDisplay";
import Search from "./Search";
import Cart from './Cart'
import CheckoutPage from "./CheckoutPage";
import AccountDetails from "./AccountDetails";
import BookDetails from './BookDetails'


function Home() {
  const [categoryContent, setCategoryContent] = useState([])
  const [view, setView] = useState('')


  return (
    <div>
      <Search />
      <CategoryDisplay categoryContent={categoryContent} />
      <Cart />
      <CheckoutPage />
      <AccountDetails />
      <BookDetails />
    </div>
  )
}

export default Home;
