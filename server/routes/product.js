const router = require('express').Router();
const createProduct = require('../middleware/products/createProduct');
const deleteProduct = require('../middleware/products/deleteProduct');
const getAllProducts = require('../middleware/products/getAllProducts');
const getProduct = require('../middleware/products/getProduct');
const updateProduct = require('../middleware/products/updateProduct');
const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

router.route('/:id')
    .get(getProduct)
    .put(verifyTokenAndAdmin, updateProduct)
    .delete(verifyTokenAndAdmin, deleteProduct)
router.post('/create', verifyTokenAndAdmin, createProduct);
router.get('/', getAllProducts)

module.exports = router