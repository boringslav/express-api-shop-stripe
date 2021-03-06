const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        id: mongoose.Types.ObjectId,
        title: { type: String, required: true },
        description: { type: String, required: true, maxlength: 500 },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', ProductSchema);