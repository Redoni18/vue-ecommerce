const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const wishlistSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('wishlist', wishlistSchema);