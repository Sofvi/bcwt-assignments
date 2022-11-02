'use strict';

const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);


module.exports = router;