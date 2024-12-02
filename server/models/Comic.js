const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genres: { type: [String], required: true },
  description: { type: String },
  coverImage: { type: String }, // URL to the image
  rating: { type: Number, default: 0 },
  trendingScore: { type: Number, default: 0 },
});

module.exports = mongoose.model('Comic', comicSchema);
