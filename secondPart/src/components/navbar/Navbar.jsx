import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <a href="/home">Home</a>

        <a href="/electronics">Electronics</a>
        <a href="/jewelery">Jewelery</a>
        <a href="/mens">Mens</a>
        <a href="/womens">Womens</a>
        
        <a href="">Profile</a>
        <a href="">Cart</a>
        <a href="">Wishlist</a>
    </div>
  )
}

export default Navbar