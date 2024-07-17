import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservations">Reservations</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/order">Order</Link></li>
    </ul>
  </nav>
);

export default Navbar;