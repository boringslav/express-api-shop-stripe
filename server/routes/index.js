const router = require('express').Router();
const db = require('../config/database')
const authRouter = require('./auth');

router.use('/api/auth', authRouter);

module.exports = router
