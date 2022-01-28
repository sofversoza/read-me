import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import AccountDetails from './components/AccountDetails';
import Cart from './components/Cart';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';

function App() {
  const [user, setUser] = useState({})
  const [categoryViewParams, setCategoryViewParams] = useState({detailView: false, category: 'Best Sellers'})
  const [cart, setCart] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchValues, setSearchValues] = useState({query: '', searchBy: ''})

  function loginOrHome() {
    if (!Object.keys(user).length) {
      return (<Login setUser={setUser}/>)
    } else {
      return (<Home categoryViewParams={categoryViewParams} setCategoryViewParams={setCategoryViewParams} 
                    cart={cart} setCart={setCart}
                    searchResults={searchResults} setSearchResults={setSearchResults}
                    searchValues={searchValues} setSearchValues={setSearchValues}
              />
      )
    }
  }

  return (
    <div className="App">
      
      {!!Object.keys(user).length ? <Header /> : <></>} 
      <Switch>
        <Route path='/cart/checkout/success'>
          <SuccessPage />
        </Route>
        <Route path={"/cart/checkout"}>
          <CheckoutPage user={user} setCategoryViewParams={setCategoryViewParams} cart={cart} setSearchValues={setSearchValues} setSearchResults={setSearchResults} />
        </Route>

        <Route path={"/cart"}>
          <Cart user={user} setCategoryViewParams={setCategoryViewParams} setCart={setCart} cart={cart} setSearchValues={setSearchValues} setSearchResults={setSearchResults}/>
        </Route>

        <Route path={"/account"}>
          <AccountDetails setCategoryViewParams={setCategoryViewParams} setSearchValues={setSearchValues} setSearchResults={setSearchResults}/>
        </Route>
        
        <Route path={"/"}>
          {loginOrHome}
        </Route>

      </Switch>
    </div>
  );
}

export default App;





