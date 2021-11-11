const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/verifyToken');

router.route('/:id')
    .put(verifyTokenAndAuthorization, async (req, res) => {
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
    })
    .delete(verifyTokenAndAuthorization, async (req, res) => {
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id)
            res.status(200).json('User deleted...')
        }
        catch (err) {
            res.status(500).json(err)
        }
    })
    .get(verifyTokenAndAdmin, async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findById(id);
            const adaptedData = Object.entries(user._doc).filter(([key,]) => key !== 'password');
            console.log('Data', Object.fromEntries(adaptedData));
            res.status(200).json(Object.fromEntries(adaptedData));
        } catch (err) {
            res.status(500).json(err);
        }
    })
module.exports = router;