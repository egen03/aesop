import React from 'react'

import Login from './Login';
import './Styles/navBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="links">
        <li>Shop</li>
        <li>Read</li>
        <li>Store</li>
        <li>Search</li>
      </ul>
      <Login/>
    </div>
  );
};

export default NavBar;