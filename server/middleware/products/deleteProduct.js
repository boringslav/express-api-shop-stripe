const Product = require('../../models/Product');

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json("Product successfully deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
}