const Cart = require('../../models/Cart');

module.exports = async (req, res) => {
    const userId = req.params.userId;

    try {
        const userCart = await Cart.find({ userId });
        res.status(200).json(userCart)

    } catch (err) {
        res.status(500).json(err)
    }
}