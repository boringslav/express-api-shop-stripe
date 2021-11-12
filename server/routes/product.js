const router = require('express').Router();
const createProduct = require('../middleware/products/createProduct');
const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

router.route('/')
    .get();
router.post('/create', verifyTokenAndAdmin, createProduct);


module.exports = router