const Comic = require('../models/Comic');

const getComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addComic = async (req, res) => {
  try {
    const {
      title, author, genres, description, coverImage,
    } = req.body;
    const comic = new Comic({
      title, author, genres, description, coverImage,
    });
    await comic.save();
    res.status(201).json({ message: 'Comic added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getComics, addComic };
