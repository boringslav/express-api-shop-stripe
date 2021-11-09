const router = require('express').Router();
const signUp = require('../middleware/sign-up');
const signIn = require('../middleware/sign-in');

router.post('/sign-in', signIn);

router.post("/sign-up", signUp)

module.exports = router