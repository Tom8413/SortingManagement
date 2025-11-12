const Vue = require('vue');
const Router = require('vue-router');
const EmployeeData = require('../components/employeeData');


Vue.use(Router);

export default new Router ({
    routers: [
     {
         path: '/show-employee',
         name: 'employeeData',
         component: EmployeeData
     },
     {
         path: '/create-employee',
         name: 'create-employee',
         component: AddEmployeeData
     }

  ]
 })