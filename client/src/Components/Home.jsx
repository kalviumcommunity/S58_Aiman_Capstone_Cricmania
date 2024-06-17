// src/components/Home.jsx

import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header white-text">Welcome to Cricmania</h1>
      <p className="home-intro white-text">
        Your ultimate cricket companion. Compare player statistics, explore stadiums, and enjoy fun games!
      </p>
    </div>
  );
};

export default Home;
