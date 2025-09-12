const mongoose = require('mongoose')

const express = require('express');

const app = express();

//require('dotenv').config();

const dbURI = process.env.HIDE_dbURI;

mongoose.connect(dbURI)
.then((result) => console.log('we are stary'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {

    res.send('<p>Write something</p>')
});