const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    ID: {
        type: number,
        required: true
    },
    nameAndSurname: {
        type: string,
        required: true
    },
    available: {
        type : boolean,
        required: true
    }
}, {timestamps: true});

const Employees = mongoose.model('Employee', employeesSchema);
module.exports = Employees; 