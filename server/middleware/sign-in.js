const CryptoJS = require("crypto-js");
const User = require('../models/User');
const authService = require('../services/authService');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        if (!user || decrypted !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            //TODO add auth token
            message: 'Sign in successful',
        })

    } catch (err) {
        console.error(err);
    }

}