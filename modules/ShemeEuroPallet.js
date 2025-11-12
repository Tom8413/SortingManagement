const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const euroPalletSchema = new Schema({
    ID_Worker: {
        type: String,
        Required: 'Please enter'
    },
    KeyPallet: {
        type: Number,
        Required: 'Please enter'
    },
}, {timestamps: true});

const EuroPallets = mongoose.model('EuroPallet', euroPalletSchema);
module.exports = EuroPallets;