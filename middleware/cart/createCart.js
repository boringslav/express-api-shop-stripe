const Cart = require('../../models/Cart');

module.exports = async (req, res) => {
    try {
        const newCart = new Cart(req.body);
        const savedCart = await newCart.save();

        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err);
    }
}