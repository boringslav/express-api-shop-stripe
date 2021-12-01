const User = require('../../models/User');

module.exports = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        const adaptedData = users.map((user) => Object.fromEntries(Object.entries(user._doc).filter(([key,]) => key !== 'password')));
        res.status(200).json(adaptedData);
    } catch (err) {
        res.status(500).json(err);
    }
}