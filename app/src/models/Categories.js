const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryBrand: [{ 
        type: mongoose.Schema.Types.Mixed, 
        ref: 'brands' 
    }]
});


module.exports = mongoose.model('categories', categorySchema);