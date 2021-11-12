const Product = require('../../models/Product')

module.exports = async (req, res) => {
    const productData = req.body;
    const newProduct = new Product(productData);

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }

}