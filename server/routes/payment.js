const router = require('express').Router();

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(STRIPE_KEY);

router.post('/', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    })
})

module.exports = router;