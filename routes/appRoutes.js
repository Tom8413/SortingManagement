const express = require('express');
const appController = require('../controlles/appControllers');
const router = express.Router();

//router.get('/add-employee', appController.employee_details);

router.post('/create-employee', appController.create_employee);


module.exports = router;