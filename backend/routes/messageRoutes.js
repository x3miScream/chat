const express = require('express');
const {sendMessage, getMessages} = require('../controllers/messageController.js');
const {protectRoute} = require('../middleware/protectRoute.js');

const router = express.Router();

router.get('/:userId', protectRoute, getMessages)
router.post('/send/:userId', protectRoute, sendMessage)

module.exports = router