require('dotenv').config();
const express = require('express');
const router = require('./routes');

const PORT = process.env.PORT || 8000;

const app = express();
app.disable('x-powered-by');


app.use(express.json()); //Important for parsing application/json
app.use(router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

