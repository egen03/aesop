import React from 'react'
import Login from './Login';
import './Styles/navBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="links">
        <li className="linkName">Shop</li>
        <li className="linkName">Read</li>
        <li className="linkName">Store</li>
        <li className="linkName">Search</li>
      </ul>
      <Login/>
    </div>
  );
};

export default NavBar;