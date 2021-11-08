const router = require('express').Router();
const authRouter = require('./auth');

router.use('/api/auth', authRouter);

module.exports = router
