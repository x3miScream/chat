const express = require('express');
const authController = require('../../controllers/authController.js')

const router = express.Router();

router.get('/signup', authController.signup);

router.get('/login', authController.loginUser);

router.get('/logout', authController.logoutUser);

router.get('/', (req, res) => {
    res.send('authentication default route');
});

module.exports = router;