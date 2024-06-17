// Compare.jsx

import axios from 'axios';
import React, { useState } from 'react';

const Compare = () => {
  const [player1Stats, setPlayer1Stats] = useState(null);
  const [player2Stats, setPlayer2Stats] = useState(null);

  const fetchPlayerStats = (playerName, playerNumber) => {
    axios.get(`http://localhost:5000/player/${encodeURIComponent(playerName)}`)
      .then(res => {
        if (playerNumber === 1) {
          setPlayer1Stats(res.data);
        } else if (playerNumber === 2) {
          setPlayer2Stats(res.data);
        }
      })
      .catch(err => console.error(`Failed to fetch stats for ${playerName}:`, err));
  };

  const handlePlayer1Change = e => {
    const playerName = e.target.value;
    fetchPlayerStats(playerName, 1);
  };

  const handlePlayer2Change = e => {
    const playerName = e.target.value;
    fetchPlayerStats(playerName, 2);
  };

  return (
    <div>
      <h1>Comparison Tool</h1>
      <div>
        <label>Select Player 1:</label>
        <select onChange={handlePlayer1Change}>
          <option value="">Select Player 1</option>
          <option value="Sachin Tendulkar">Sachin Tendulkar</option>
          {/* Add other player options dynamically */}
        </select>
      </div>
      <div>
        <label>Select Player 2:</label>
        <select onChange={handlePlayer2Change}>
          <option value="">Select Player 2</option>
          <option value="Virat Kohli">Virat Kohli</option>
          {/* Add other player options dynamically */}
        </select>
      </div>
      <div>
        <h3>Player 1 Stats: {player1Stats ? JSON.stringify(player1Stats) : 'Loading...'}</h3>
        <h3>Player 2 Stats: {player2Stats ? JSON.stringify(player2Stats) : 'Loading...'}</h3>
      </div>
    </div>
  );
};

export default Compare;
