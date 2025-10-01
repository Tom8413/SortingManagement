const express = require('express');
const Employee = require('../modules/ShameTemplate');
const router = express.Router();

router.get('/add-employee', (req, res) => {
    const employee = new Employee({
        ID: 1002,
        nameAndSurname: 'Adam Lolek',
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

module.exports = router;