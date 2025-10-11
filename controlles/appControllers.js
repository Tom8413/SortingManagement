const Employees = require('../modules/ShameTemplate');

const create_employee = (req, res) => {
    const employee = new Employees(req.body);

    employee.save()
        .then((result) => {
        res.status(200).send(result)
        console.log(req.body)
    })
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {

    create_employee
};