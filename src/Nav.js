import React, {Component} from 'react';
import books from './assets/books.jpeg';
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
            <img heigh ="100" width = "120" src={coffe} alt="coffe" />   
            <img heigh ="120" width = "120" src={books} alt="books" /> 
            </h3>
            <h3> GMU's Favorite Study Spots </h3>
            <ul className = "nav-links">
                <Link style = {NavStyle} to="/">
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