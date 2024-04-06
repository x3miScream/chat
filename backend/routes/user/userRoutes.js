const express = require('express');
const userController = require('../../controllers/userController.js')

const router = express.Router();

router.get('/', (req, res) => {
    userController.create(req, res);
});

router.post('/create', (req, res) => {
    res.send('create user');
});

module.exports = router;