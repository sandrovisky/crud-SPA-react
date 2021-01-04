import React from 'react'
import Header from './includes/header'
import Footer from './includes/footer'
import {BrowserRouter as Router} from 'react-router-dom'
import Page from './Page'
import Nav from './includes/nav'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = 'container' >
      

      <Router>
        <Header />
        <Nav />
        <Page />
        <Footer />  
      </Router>  

      
    </div>
  );
}

export default App;
