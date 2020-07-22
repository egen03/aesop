import React, {Component} from 'react'

import Login from './Login';
import './Styles/navBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="links">
        <li className="navLinks">Shop</li>
        <li className="navLinks">Read</li>
        <li className="navLinks">Store</li>
        <li className="navLinks">Search</li>
      </ul>
      <Login/>
    </div>
  );
};

export default NavBar;