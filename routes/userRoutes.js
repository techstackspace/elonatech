const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /users - Return list of users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
