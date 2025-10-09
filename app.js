const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const appRouter = require('./routes/appRoutes');


const app = express();

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true,
}));

dotenv.config();

const dbURI = process.env.HIDE_dbURI;


mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(appRouter);
