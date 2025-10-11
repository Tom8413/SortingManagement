const Employees = require('../modules/ShameTemplate');



const employee_details = (req, res) => {
    Employees.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    };

    
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

    create_employee,
    employee_details,
};