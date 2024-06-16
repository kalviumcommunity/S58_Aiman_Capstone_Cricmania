// Result.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const player1 = searchParams.get('player1');
  const player2 = searchParams.get('player2');
  const format = searchParams.get('format');
  const [playerDetails1, setPlayerDetails1] = useState(null);
  const [playerDetails2, setPlayerDetails2] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response1 = await fetch(`/api/players/${player1}?format=${format}`);
        const data1 = await response1.json();
        setPlayerDetails1(data1);

        const response2 = await fetch(`/api/players/${player2}?format=${format}`);
        const data2 = await response2.json();
        setPlayerDetails2(data2);
      } catch (error) {
        console.error('Failed to fetch player details:', error);
      }
    };
    fetchPlayerDetails();
  }, [player1, player2, format]);

  return (
    <div>
      <h2>Cricmania</h2>
      <h3>Comparison Results</h3>
      <div>
        <h4>{player1}</h4>
        {playerDetails1 && (
          <ul>
            {playerDetails1.stats.map(stat => (
              <li key={stat.format}>
                <strong>{stat.format}:</strong> Matches: {stat.matches}, Runs: {stat.runs}, Wickets: {stat.wickets}, Average: {stat.average}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h4>{player2}</h4>
        {playerDetails2 && (
          <ul>
            {playerDetails2.stats.map(stat => (
              <li key={stat.format}>
                <strong>{stat.format}:</strong> Matches: {stat.matches}, Runs: {stat.runs}, Wickets: {stat.wickets}, Average: {stat.average}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Result;
