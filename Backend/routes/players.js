const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/player/:name', async (req, res) => {
  const playerName = req.params.name;

  try {
    const player = await Player.findOne({ name: playerName });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json({ stats: player.stats });
  } catch (err) {
    console.error('Error fetching player stats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
