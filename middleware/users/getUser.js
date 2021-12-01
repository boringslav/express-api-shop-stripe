const User = require('../../models/User');

module.exports = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        const adaptedData = Object.fromEntries(Object.entries(user._doc).filter(([key, value]) => key !== "password"));
        res.status(200).json(adaptedData);
    } catch (err) {
        res.status(500).json(err)
    }
}