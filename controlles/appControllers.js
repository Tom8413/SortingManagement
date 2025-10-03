const Employee = require('../modules/ShameTemplate');

const employee_details = (req, res) => {
    const employee = new Employee({
        ID: 1003,
        nameAndSurname: 'Adam Lolek',
        available: true
    });

    employee.save()
        .then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {
    employee_details
};