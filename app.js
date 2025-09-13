const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const dbURI = process.env.HIDE_dbURI;


mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.get('/', (req, res) => {

    res.send('<p>Write something</p>')
});