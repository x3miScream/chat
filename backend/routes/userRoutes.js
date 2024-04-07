const express = require('express');
const userController = require('../controllers/userController.js')
const {protectRoute} = require('../middleware/protectRoute.js');

const router = express.Router();

router.post('/create', (req, res) => {
    userController.create(req, res);
});

router.get('/getAllUsersForSidebar', protectRoute, userController.getAllUsersForSidebar);

router.get('/:userId', protectRoute, userController.getById);

router.get('/', protectRoute, userController.getAll);

module.exports = router;