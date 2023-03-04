const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: boolean,
        required: true
    },
});

module.exports = mongoose.model('user', userSchema);