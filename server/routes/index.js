const router = require('express').Router();
const db = require('../config/database')
const authRouter = require('./auth');
const userRouter = require('./user');

router.use('/api/auth', authRouter);
router.use('/api/users', userRouter);
module.exports = router
