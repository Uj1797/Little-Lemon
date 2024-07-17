import React from 'react';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';

const Menu = () => (
  <div>
    <h1>Our Menu</h1>
    <div className="menu-item">
      <img src={dish1} alt="Paanipoori" />
      <p>Item 1:  A refreshing south asian snack</p>
    </div>
    <div className="menu-item">
      <img src={dish2} alt="Lobster" />
      <p>Item 2: Our most premium seafood dish</p>
    </div>
  </div>
);

export default Menu;