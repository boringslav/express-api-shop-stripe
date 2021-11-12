const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/verifyToken');
const createCart = require('../middleware/cart/createCart')
const updateCart = require('../middleware/cart/updateCart');
const deleteCart = require('../middleware/cart/deleteCart');
const getUserCart = require('../middleware/cart/getUserCart');
const getAllCarts = require('../middleware/cart/getAllCarts');

router.route('/')
    .get(verifyTokenAndAdmin, getAllCarts)
    .post(verifyTokenAndAuthorization, createCart);
router.route('/:id')
    .put(verifyTokenAndAuthorization, updateCart)
    .delete(verifyTokenAndAuthorization, deleteCart)
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart);

module.exports = router;