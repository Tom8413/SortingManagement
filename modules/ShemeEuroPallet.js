const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const euroPalletSchema = new Schema({
    ID_Worker: {
        type: String,
        Required: 'Please enter'
    },
    keyPallet: {
        type: Number,
        Required: 'Please enter'
    },
    quantity: {
        type: Number,
        Reqired: 'Please enter'
    },
    nested: {
        type: String,
        Required: 'Please enter'
    },
    department: {
        type: String,
        Required: 'Please enter'
    },
    location: {
        type: String,
        Reuired: 'Please enter'
    },
    codeForTickets: {
        type: Number,
        Required: 'Please enter'
    },
    codeForSelectors: {
        type: Number,
        Required: 'Please enter'
    }
}, {timestamps: true});

const EuroPallets = mongoose.model('EuroPallet', euroPalletSchema);
module.exports = EuroPallets;