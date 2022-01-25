import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      {!!Object.keys(user).length ? <Login setUser={setUser}/> : 
        <>
          <Header />
          <Home />
        </>
      }
    </div>
  );
}

export default App;
