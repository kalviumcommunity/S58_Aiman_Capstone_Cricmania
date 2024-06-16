// Populate.js
const mongoose = require('mongoose');
const Player = require('./models/player');
require('dotenv').config();
const connectDB = require('./db');

connectDB();

const populateDatabase = async () => {
  try {
    const players = [
      {
        name: 'Sachin Tendulkar',
        country: 'India',
        stats: [
          { format: 'Test', matches: 200, runs: 15921, wickets: 46, average: 53.78 },
          { format: 'ODI', matches: 463, runs: 18426, wickets: 154, average: 44.83 }
        ]
      },
      {
        name: 'Virat Kohli',
        country: 'India',
        stats: [
          { format: 'Test', matches: 92, runs: 7547, wickets: 0, average: 52.04 },
          { format: 'ODI', matches: 254, runs: 12169, wickets: 4, average: 59.07 },
          { format: 'T20I', matches: 90, runs: 3159, wickets: 4, average: 52.65 }
        ]
      }
    ];

    await Player.insertMany(players);
    console.log('Database populated successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
};

populateDatabase();
