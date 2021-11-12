const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/verifyToken');
const getUsers = require('../middleware/users/getUsers');
const updateUser = require('../middleware/users/updateUser');
const deleteUser = require('../middleware/users/deleteUser');
const getUser = require('../middleware/users/getUser');

router.route('/:id')
    .put(verifyTokenAndAuthorization, updateUser)
    .delete(verifyTokenAndAuthorization, deleteUser)
    .get(verifyTokenAndAuthorization, getUser)

router.get('/', verifyTokenAndAdmin, getUsers)

module.exports = router;