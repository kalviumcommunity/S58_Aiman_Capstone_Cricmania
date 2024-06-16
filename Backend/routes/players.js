// players.js

const express = require('express');
const router = express.Router();
const Player = require('../models/player'); // Adjust path as per your file structure

// GET player stats by name
router.get('/:name', async (req, res) => {
  const playerName = req.params.name;

  try {
    const player = await Player.findOne({ name: playerName });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    // Assuming player.stats is an array, adjust this based on your schema
    const playerStats = player.stats; // Assuming player.stats is an array of stats objects

    if (!playerStats || playerStats.length === 0) {
      return res.status(404).json({ message: 'Player stats not found' });
    }

    res.json({ stats: playerStats });
  } catch (err) {
    console.error('Error fetching player stats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
