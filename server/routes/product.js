const router = require('express').Router();
const createProduct = require('../middleware/products/createProduct');
const deleteProduct = require('../middleware/products/deleteProduct');
const updateProduct = require('../middleware/products/updateProduct');
const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

router.route('/:id')
    .put(verifyTokenAndAdmin, updateProduct)
    .delete(verifyTokenAndAdmin, deleteProduct)
router.post('/create', verifyTokenAndAdmin, createProduct);


module.exports = router