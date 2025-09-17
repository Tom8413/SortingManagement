const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const Employee = require('./modules/ShameTemplate');

const app = express();
dotenv.config();

const dbURI = process.env.HIDE_dbURI;


mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.get('/add-employee', (req, res) => {
    const employee = new Employee({
        ID: 1000,
        nameAndSurname: 'Adam Kwiatkowski',
        available: true
    });

    employee.save()
        .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    }) 
})