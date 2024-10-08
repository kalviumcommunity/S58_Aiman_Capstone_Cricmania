// server.js
require('dotenv').config(); // Ensure dotenv is loaded at the top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db'); // Importing the database connection setup

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully.');

    // Start the server after successful MongoDB connection
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process with failure if MongoDB connection fails
  });

// Import routes
const playersRouter = require('./routes/players');
const authRoutes = require('./routes/auth');

app.use('/api/players', playersRouter);
app.use('/api/auth', authRoutes);

// Endpoint to check MongoDB connection status
app.get('/', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.status(200).json({ message: 'MongoDB connected.', status: 200 });
  } else {
    res.status(500).json({ message: 'MongoDB connection error.', status: 500 });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error.', status: 500 });
});
