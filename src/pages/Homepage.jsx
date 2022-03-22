import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Homepage = () => {
  return (
    <div>
        <Banner/>
        <Navbar/>
        <Products/>
    </div>
  );
};

export default Homepage;