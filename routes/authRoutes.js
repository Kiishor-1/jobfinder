const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// User registration route with mobile number
router.post("/register",signup);
router.post("/login",login);

module.exports = router;
