import React from 'react';
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About'
import Stats from './Stats'
import Home from './Home'


function App () {
  
  return (
    <Router>
    <div className="App">
      <Nav/>
      <header className="App-header">
        <Switch>
       <Route path="/about" component = {About}/>
       <Route path="/stats" component = {Stats}/>
       <Route path="/" component = {Home}/>
       </Switch>
      </header>
    </div>
    </Router>
  );
  
}

export default App;
