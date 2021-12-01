const User = require('../../models/User');

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json('User deleted...')
    }
    catch (err) {
        res.status(500).json(err)
    }
}