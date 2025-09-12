import * as dotenv from 'dotenv';
dotenv.config();


const express = require('express');

const app = express();


app.listen(3000);

app.get('/', (req, res) => {

    res.send('<p>Write something</p>')
});