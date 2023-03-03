const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    // productCategory: [{ 
    //     type: mongoose.Schema.Types.Mixed, 
    //     ref: 'categories' 
    // }]
});


module.exports = mongoose.model('products', productSchema);