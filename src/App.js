import React from 'react';
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About'
import Stats from './Stats'
import Home from './Home'
//import ApolloClient from 'apollo-boost'
//import firebase from 'firebase';
//import 'firebase/firestore';

function App () {
  
  return (
    <Router>
    <div className="App">
      <Nav/>
      <header className="App-header">
        <Switch>
        <Route path="/" exact component = {Home}/>
       <Route path="/about" component = {About}/>
       <Route path="/stats" component = {Stats}/>
       </Switch>
      </header>
    </div>
    </Router>
  );
  
}

export default App;
