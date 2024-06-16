const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Player = require('./models/Player'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://Aiman30:Aiman%4030@cluster0.c0nai7r.mongodb.net/Cricmania?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Endpoint to fetch all players
app.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    console.error('Failed to fetch players:', err);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Endpoint to fetch stats for a specific player by name
app.get('/player/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const player = await Player.findOne({ name });
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player.stats);
  } catch (err) {
    console.error(`Failed to fetch stats for ${name}:`, err);
    res.status(500).json({ error: `Failed to fetch stats for ${name}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
