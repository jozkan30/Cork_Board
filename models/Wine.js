const mongoose = require('../connection.js');

const WineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  varietal: {
    type: String,
    required: true
  },
  vintage: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Wine', WineSchema);
