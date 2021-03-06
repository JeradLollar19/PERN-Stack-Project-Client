import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import 'typeface-roboto';
import './App.css';
import Sitebar from './Home/Navbar';
import Auth from './Auth/Auth';
import ReviewIndex from './Reviews/ReviewIndex';
import DatabaseApp from './movieDatabase/DatabaseApp';
import Paper from '@material-ui/core/Paper';
import Footer from './Home/Footer';


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }
  console.log(sessionToken);

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ReviewIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }



  return (
    <div>
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      {protectedViews()}
      <DatabaseApp/>
      <Paper elevation={3}/>
      <Footer/>
    </div>
  );
}

export default App;
