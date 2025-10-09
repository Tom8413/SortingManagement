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

const create_employee = (req, res) => {

    let new_user = new Employee(req.body);
    new_user.save(function(err, user) {

        if(err)
        res.send(err);
        res.json(user);
    });
}

module.exports = {
    employee_details,
    create_employee
};