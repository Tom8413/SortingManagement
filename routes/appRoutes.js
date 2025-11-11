const express = require('express');
const appControllersEmployee = require('../controlles/appControllersEmployee');
const router = express.Router();

router.get('/show-employee', appControllersEmployee.employee_details);

router.post('/create-employee', appControllersEmployee.create_employee);

router.delete('/delete-employee/:id', appControllersEmployee.delete_employee);


module.exports = router;