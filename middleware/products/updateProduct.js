const Product = require('../../models/Product');

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
}