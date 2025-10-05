const Employee = require('../modules/ShameTemplate');

const employee_details = (req, res) => {
    const employee = new Employee(req.body);

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