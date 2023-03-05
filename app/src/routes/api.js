
const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

/**
 * Routes
 */


router.get('/api/products', productController.get_products);
router.get('/api/product/:id', productController.get_product);
router.post('/api/uploadProduct', productController.upload_product);
router.put('/api/editProduct/:id', productController.edit_product);
router.delete('/api/products/delete/:id', productController.delete_product);


router.post('/api/insertUser', userController.insert_user);
router.get('/api/user/:id', userController.get_user);


module.exports = router;
