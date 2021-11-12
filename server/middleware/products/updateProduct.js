const Product = require('../../models/Product');

module.exports = async (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).send(updatedProduct)
    } catch (err) {
        res.status(500).send(err)
    }
}