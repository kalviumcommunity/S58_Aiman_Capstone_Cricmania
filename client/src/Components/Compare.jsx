// Compare.jsx

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Compare = () => {
  const [player1Stats, setPlayer1Stats] = useState([]);
  const [player2Stats, setPlayer2Stats] = useState([]);
  const [playerNames, setPlayerNames] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState('ODI'); // Default format selection

  useEffect(() => {
    fetchPlayerNames();
  }, []);

  const fetchPlayerNames = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/players/names');
      setPlayerNames(response.data);
    } catch (error) {
      console.error('Failed to fetch player names:', error);
    }
  };

  const fetchPlayerStats = async (playerName, playerNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/players/${encodeURIComponent(playerName)}?format=${selectedFormat}`);
      if (playerNumber === 1) {
        setPlayer1Stats(response.data.stats);
      } else if (playerNumber === 2) {
        setPlayer2Stats(response.data.stats);
      }
    } catch (error) {
      console.error(`Failed to fetch stats for ${playerName}:`, error);
    }
  };

  const handlePlayer1Change = e => {
    const playerName = e.target.value;
    fetchPlayerStats(playerName, 1);
  };

  const handlePlayer2Change = e => {
    const playerName = e.target.value;
    fetchPlayerStats(playerName, 2);
  };

  const handleFormatChange = e => {
    const format = e.target.value;
    setSelectedFormat(format);
    // Reset stats when format changes
    setPlayer1Stats([]);
    setPlayer2Stats([]);
  };

  return (
    <div>
      <h1>Comparison Tool</h1>
      <div>
        <label>Select Player 1:</label>
        <select onChange={handlePlayer1Change}>
          <option value="">Select Player 1</option>
          {playerNames.map((player, index) => (
            <option key={index} value={player.name}>{player.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Player 2:</label>
        <select onChange={handlePlayer2Change}>
          <option value="">Select Player 2</option>
          {playerNames.map((player, index) => (
            <option key={index} value={player.name}>{player.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Format:</label>
        <select onChange={handleFormatChange} value={selectedFormat}>
          <option value="ODI">ODI</option>
          <option value="Test">Test</option>
          <option value="T20I">T20I</option>
        </select>
      </div>
      <div>
        <h3>Player 1 Stats:</h3>
        <ul>
          {player1Stats.map((stat, index) => (
            <li key={index}>{`${stat.format}: Matches - ${stat.matches}, Runs - ${stat.runs}, Wickets - ${stat.wickets}, Average - ${stat.average}`}</li>
          ))}
          {player1Stats.length === 0 && <li>No stats available</li>}
        </ul>
      </div>
      <div>
        <h3>Player 2 Stats:</h3>
        <ul>
          {player2Stats.map((stat, index) => (
            <li key={index}>{`${stat.format}: Matches - ${stat.matches}, Runs - ${stat.runs}, Wickets - ${stat.wickets}, Average - ${stat.average}`}</li>
          ))}
          {player2Stats.length === 0 && <li>No stats available</li>}
        </ul>
      </div>
    </div>
  );
};

export default Compare;
