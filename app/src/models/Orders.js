const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userSurname: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('orders', orderSchema);