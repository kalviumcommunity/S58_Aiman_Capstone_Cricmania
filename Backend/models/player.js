const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  format: { type: String, required: true },
  matches: { type: Number, required: true },
  runs: { type: Number, required: true },
  wickets: { type: Number, required: true },
  average: { type: Number, required: true }
}, { _id: false });

const playerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  stats: [statsSchema]
});

module.exports = mongoose.model('Player', playerSchema);
