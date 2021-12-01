const router = require('express').Router();
const db = require('../config/database');
const authRouter = require('./auth');
const usersRouter = require('./user');
const productsRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const paymentRouter = require('./payment');

router.use('/api/auth', authRouter);
router.use('/api/users', usersRouter);
router.use('/api/products', productsRouter);
router.use('/api/cart', cartRouter);
router.use('/api/orders', orderRouter);
router.use('/api/checkout/payment', paymentRouter);
module.exports = router
