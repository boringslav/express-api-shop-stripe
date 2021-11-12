const Product = require('../../models/Product')

module.exports = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        if (!product) return res.status(404).json({ msg: "Product not found" })
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json(err)
    }
}