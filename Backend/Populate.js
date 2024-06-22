require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('./models/player');
require('./config/db'); // Ensure the database connection is established

const populateDatabase = async () => {
  try {
    const players = [
      {
        name: 'Brian Lara',
        country: 'West Indies',
        stats: [
          { format: 'Test', matches: 131, runs: 11953, wickets: 0, average: 52.88 },
          { format: 'ODI', matches: 299, runs: 10405, wickets: 4, average: 40.48 }
        ]
      },
      {
        name: 'Ricky Ponting',
        country: 'Australia',
        stats: [
          { format: 'Test', matches: 168, runs: 13378, wickets: 5, average: 51.85 },
          { format: 'ODI', matches: 375, runs: 13704, wickets: 3, average: 42.03 }
        ]
      },
      {
        name: 'Jacques Kallis',
        country: 'South Africa',
        stats: [
          { format: 'Test', matches: 166, runs: 13289, wickets: 292, average: 55.37 },
          { format: 'ODI', matches: 328, runs: 11579, wickets: 273, average: 44.36 }
        ]
      },
      {
        name: 'Kumar Sangakkara',
        country: 'Sri Lanka',
        stats: [
          { format: 'Test', matches: 134, runs: 12400, wickets: 0, average: 57.40 },
          { format: 'ODI', matches: 404, runs: 14234, wickets: 0, average: 41.98 }
        ]
      },
      {
        name: 'AB de Villiers',
        country: 'South Africa',
        stats: [
          { format: 'Test', matches: 114, runs: 8765, wickets: 2, average: 50.66 },
          { format: 'ODI', matches: 228, runs: 9577, wickets: 7, average: 53.50 },
          { format: 'T20I', matches: 78, runs: 1672, wickets: 0, average: 26.12 }
        ]
      },
      {
        name: 'Rahul Dravid',
        country: 'India',
        stats: [
          { format: 'Test', matches: 164, runs: 13288, wickets: 1, average: 52.31 },
          { format: 'ODI', matches: 344, runs: 10889, wickets: 4, average: 39.16 }
        ]
      },
      {
        name: 'Sourav Ganguly',
        country: 'India',
        stats: [
          { format: 'Test', matches: 113, runs: 7212, wickets: 32, average: 42.17 },
          { format: 'ODI', matches: 311, runs: 11363, wickets: 100, average: 41.02 }
        ]
      },
      {
        name: 'Inzamam-ul-Haq',
        country: 'Pakistan',
        stats: [
          { format: 'Test', matches: 120, runs: 8830, wickets: 3, average: 49.60 },
          { format: 'ODI', matches: 378, runs: 11739, wickets: 3, average: 39.52 }
        ]
      },
      {
        name: 'Mahela Jayawardene',
        country: 'Sri Lanka',
        stats: [
          { format: 'Test', matches: 149, runs: 11814, wickets: 6, average: 49.84 },
          { format: 'ODI', matches: 448, runs: 12650, wickets: 8, average: 33.37 }
        ]
      },
      {
        name: 'Steve Waugh',
        country: 'Australia',
        stats: [
          { format: 'Test', matches: 168, runs: 10927, wickets: 92, average: 51.06 },
          { format: 'ODI', matches: 325, runs: 7569, wickets: 195, average: 32.90 }
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
