const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const id = req.params.id;

    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        const updatedData = Object.entries(updatedUser._doc).filter(([key, value]) => key !== "password");

        res.status(200).json(Object.fromEntries(updatedData));

    } catch (err) {
        res.status(500).json({ message: err })
    }
});

module.exports = router;