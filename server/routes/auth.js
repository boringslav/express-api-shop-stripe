const mongoose = require('mongoose');
const router = require('express').Router();
const authService = require('../services/authService');

router.route('/sign-in')
    .post((req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        res.send(req.body);
    })


router.post("/sign-up", async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;
    const isValidUserData = authService.validateSignUp(username, email, password, repeatPassword);

    if (isValidUserData) {
        const savedUser = await authService.saveUser(username, email, password);
        console.log('User', savedUser);
        if (savedUser) {
            res.status(200).send({
                message: 'User created successfully'
            })
        } else {
            res.status(500).send({
                message: 'Error saving user'
            })
        }

    } else {
        res.status(500).send({
            message: "Error creating user"
        })
    }
})

module.exports = router