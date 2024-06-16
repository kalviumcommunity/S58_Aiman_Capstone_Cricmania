const mongoose = require('mongoose');
const Player = require('./models/Player'); // Adjust the path based on your file structure

const mongoURI = 'mongodb+srv://Aiman30:Aiman%4030@cluster0.c0nai7r.mongodb.net/Cricmania?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

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

Player.insertMany(players)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
