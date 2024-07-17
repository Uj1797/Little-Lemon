import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

const Home = () => (
  <div>
    <h1>Welcome to Little Lemon</h1>
    <div className="banners">
      <img src={banner1} alt="Banner 1" />
      <img src={banner2} alt="Banner 2" />
    </div>
    <section>
      <h2>Specialities</h2>
      <p>Some specialities...</p>
    </section>
    <section>
      <h2>Current Orders</h2>
      <p>Current orders...</p>
    </section>
  </div>
);

export default Home;