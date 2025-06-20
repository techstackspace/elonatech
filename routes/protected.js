const express = require('express');
const verifyToken = require('../middlewares/auth');

const router = express.Router();

// Example protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});
