const Cart = require('../../models/Cart');

module.exports = async (req, res) => {
    const id = req.params.id;

    try {
        await Cart.findByIdAndDelete(id);

        res.status(200).json('Cart deleted successfully...')
    } catch (err) {
        res.status(500).json(err);
    }

}