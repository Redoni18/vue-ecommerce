const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userFullName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('user', userSchema);