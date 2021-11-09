const mongoose = require('mongoose');
const router = require('express').Router();
const CryptoJS = require("crypto-js");
const User = require('../models/User');
const authService = require('../services/authService');

router.route('/sign-in')
    .post((req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        res.send(req.body);
    })


router.post("/sign-up", async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;
    const userData = await authService.validateSignUp(username, email, password, repeatPassword);

    if (userData.isValid) {
        const newUser = new User({
            username,
            email,
            password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
        })

        try {
            await newUser.save();
            res.status(201).send({ message: "User created successfully" });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    } else {
        res.status(500).send({
            message: userData.message
        })
    }
})

module.exports = router