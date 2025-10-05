const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type : String,
        Required: 'Please enter'
    }
}, {timestamps: true});

const Employees = mongoose.model('Employee', employeesSchema);
module.exports = Employees; 