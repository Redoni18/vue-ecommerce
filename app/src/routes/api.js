
const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const productController = require('../controllers/productController');


/**
 * Routes
 */


router.get('/api/products', productController.get_products);
router.get('/api/product/:id', productController.get_product);
router.post('/api/uploadProduct', productController.upload_product);
router.put('/api/editProduct/:id', productController.edit_product);
router.delete('/api/products/delete/:id', productController.delete_product);


module.exports = router;
