import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        
        <a href="">Profile</a>
        <a href="">Cart</a>
        <a href="">Wishlist</a>
    </div>
  )
}

export default Navbar