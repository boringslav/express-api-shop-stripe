const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }, quantity: {
                type: Number,
                required: true
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object, //Stripe returns object after payment
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'cancelled'],
    }
});

module.exports = mongoose.model('Order', OrderSchema);