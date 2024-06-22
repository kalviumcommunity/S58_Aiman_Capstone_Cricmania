// routes/players.js

const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Route to fetch all player names
router.get('/names', async (req, res) => {
  try {
    const players = await Player.find({}, 'name');
    res.json(players);
  } catch (err) {
    console.error('Error fetching player names:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch player stats by name and format
router.get('/:name', async (req, res) => {
  const playerName = req.params.name;
  const format = req.query.format; // Get format from query parameter

  try {
    const player = await Player.findOne({ name: playerName });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // Filter stats by format
    const filteredStats = player.stats.filter(stat => stat.format === format);

    // Return the filtered stats
    res.json({ stats: filteredStats });
  } catch (err) {
    console.error('Error fetching player stats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
