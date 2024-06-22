// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB already connected.');
      return; // MongoDB already connected, exit function
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure on connection error
  }
};

module.exports = connectDB;
