const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Log the token for debugging purposes
    console.log('Received token:', token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log decoded token
    console.log('Decoded token:', decoded);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Log the found user
    console.log('Authenticated user:', user);

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;


