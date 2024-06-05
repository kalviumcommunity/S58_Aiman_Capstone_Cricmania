// src/components/Home.jsx

import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Your ultimate cricket companion</h1>
      </header>
      <section className="home-intro">
        <p>
          Cricmania is a must-have app for all cricket lovers around the globe. Compare current and past players' statistics from across the globe in different formats, explore stadiums, and much more!
        </p>
        <p>
          Whether you are a fan of ODIs, T20s, or Test matches, Cricmania has everything you need to stay updated and entertained.
        </p>
      </section>
    </div>
  );
};

export default Home;
