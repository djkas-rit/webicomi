const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    return res.json({ message: 'Login successful.', user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
