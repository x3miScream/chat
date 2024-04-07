const express = require('express');
const authController = require('../controllers/authController.js')

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.loginUser);

router.post('/logout', authController.logoutUser);

router.get('/', (req, res) => {
    res.send('authentication default route');
});

module.exports = router;