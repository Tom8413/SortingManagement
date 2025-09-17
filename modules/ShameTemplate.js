const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },
    nameAndSurname: {
        type: String,
        required: true
    },
    available: {
        type : Boolean,
        required: true
    }
}, {timestamps: true});

const Employees = mongoose.model('Employee', employeesSchema);
module.exports = Employees; 