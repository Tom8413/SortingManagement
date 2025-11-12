const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const euroPalletSchema = new Schema({
    ID_Worker: {
        type: String,
        Required: true
    },
}, {timestamps: true});

const EuroPallets = mongoose.model('EuroPallet', euroPalletSchema);
module.exports = EuroPallets;