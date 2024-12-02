const Comic = require('../models/Comic');

exports.getComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addComic = async (req, res) => {
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
