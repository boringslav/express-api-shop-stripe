const router = require('express').Router();
const signUp = require('../middleware/users/sign-up');
const signIn = require('../middleware/users/sign-in');

router.post('/sign-in', signIn);
router.post("/sign-up", signUp)

module.exports = router