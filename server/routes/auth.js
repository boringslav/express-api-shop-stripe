const router = require('express').Router();
const signUp = require('../middleware/sign-up');

router.route('/sign-in')
    .post((req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        res.send(req.body);
    })


router.post("/sign-up", signUp)

module.exports = router