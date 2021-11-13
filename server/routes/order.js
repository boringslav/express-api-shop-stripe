const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middleware/verifyToken');
const createOrder = require('../middleware/order/createOrder');
const deleteOrder = require('../middleware/order/deleteOrder');
const getAllOrders = require('../middleware/order/getAllOrders');
const getUserOrders = require('../middleware/order/getUserOrders');
const updateOrder = require('../middleware/order/updateOrder');

const router = require('express').Router();

router.route('/')
    .get(verifyTokenAndAdmin, getAllOrders);
router.route('/:id')
    .put(verifyTokenAndAdmin, updateOrder)
    .delete(verifyTokenAndAdmin, deleteOrder)
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrders);
router.post('/create', verifyTokenAndAuthorization, createOrder)


module.exports = router