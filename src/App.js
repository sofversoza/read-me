import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';
import Login from './components/Login';
import AccountDetails from './components/AccountDetails';
import Cart from './components/Cart';
import CheckoutPage from './components/CheckoutPage';


function App() {
  const [user, setUser] = useState({})
  const [categoryViewParams, setCategoryViewParams] = useState({detailView: false, category: 'Best Sellers'})

  function loginOrHome() {
    if (!Object.keys(user).length) {
      return (<Login setUser={setUser}/>)
    } else {
      return (<Home categoryViewParams={categoryViewParams} setCategoryViewParams={setCategoryViewParams}/>)
    }
  }

  return (
    <div className="App">
      <Header />
      <Switch>

        <Route path={"/cart/checkout"}>
          <CheckoutPage setCategoryViewParams={setCategoryViewParams}/>
        </Route>

        <Route path={"/cart"}>
          <Cart setCategoryViewParams={setCategoryViewParams}/>
        </Route>
        
        <Route path={"/account"}>
          <AccountDetails setCategoryViewParams={setCategoryViewParams}/>
        </Route>
        
        <Route path={"/"}>
          {loginOrHome}
        </Route>

      </Switch>
    </div>
  );
}

export default App;





