require('dotenv').config();
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@ecommerce.sa5vg.mongodb.net/shop?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, })
const db = mongoose.connection;

db.on('error', () => console.error('Error connecting to database'));
db.once('open', () => {
    console.log('Connected to database!');
});

module.exports = db;