const Cart = require('../../models/Cart');

module.exports = async (req, res) => {
    const id = req.params.id

    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}