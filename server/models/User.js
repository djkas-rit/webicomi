const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: [String], default: [] }, // Genres or tags
  likedComics: { type: [mongoose.Schema.Types.ObjectId], ref: 'Comic' },
});

module.exports = mongoose.model('User', userSchema);
