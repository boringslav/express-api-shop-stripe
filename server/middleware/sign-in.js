const CryptoJS = require("crypto-js");
const User = require('../models/User');
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        if (decrypted !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3d' });

        const adaptedData = Object.entries(user.toObject()).filter(([key, value]) => key !== 'password');

        res.status(200).json({
            accessToken,
            user: Object.fromEntries(adaptedData),
        });

    } catch (err) {
        console.error(err);
    }

}