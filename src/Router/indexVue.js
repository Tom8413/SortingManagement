const Vue = require('vue');
const Router = require('vue-router');
const Employee = require('../components/employee');


Vue.use(Router);

export default new Router ({
 routers: [
    {
        path: '/employee',
        name: 'employee',
        component: Employee
    }

 ]
})