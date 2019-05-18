const express = require('express');
const route = express.Router();
const authController = require('../controllers/auth.controller');

// SIGNUP
route.post('/signup', authController.postSignup);

// LOGIN
route.post('/login', authController.postLogin);

module.exports = route;
