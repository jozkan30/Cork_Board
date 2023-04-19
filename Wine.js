const mongoose = require('./connection');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review