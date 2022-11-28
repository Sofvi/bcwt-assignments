'use strict';
const express = require('express');
const router = express.Router()
const {body} = require('express-validator');

const userController = require('../controllers/userController');

router.get('/token', userController.checkToken);

router.get('/', userController.getUsers)
.put('/',
    body("name").isLength({min:3}).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("passwd").isStrongPassword(),
    userController.modifyUser)

router.get('/:userId', userController.getUser)
.put('/:userId',
    body("name").isLength({min:3}).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("passwd").isStrongPassword(),
    userController.modifyUser)
.delete(userController.deleteUser)

module.exports = router