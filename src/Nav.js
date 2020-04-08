import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import coffe from './assets/coffee.jpg';

const NavStyle = {
    color: 'white'
};

class Nav extends Component {

    render() {

    return(
        <nav>
            <h3>
            <img heigh ="60" width = "80" src={coffe} alt="coffe" />   
            <img src={logo} className="App-logo" alt="logo" />
            GMU Cafe Review
            </h3>
            <ul className = "nav-links">
                <Link style = {NavStyle} to="/home">
                <li>Home</li>
                </Link>
                <Link style = {NavStyle} to="/about">
                <li>About</li>
                </Link>
                <Link style = {NavStyle} to = "/stats">
                <li>Review Statistics</li>
                </Link>
            </ul>
        </nav>
    )
    }
}

export default Nav; 