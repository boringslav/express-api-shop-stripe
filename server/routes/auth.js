const router = require('express').Router();

router.route('/sign-in')
    .get((req, res) => {
        res.send('SignIn');
    })
    .post((req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        res.send(req.body);
    })
router.route('/sign-up')
    .get((req, res) => {
        res.send('SignUp');
    })
    .post((req, res) => {
        const { email, password, repeatPassword } = req.body;
        console.log(email, password, repeatPassword);
        res.send(req.body);
    })

module.exports = router