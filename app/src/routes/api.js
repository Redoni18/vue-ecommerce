
const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');


/**
 * Routes
 */


router.get('/api/products', productController.get_products);
router.get('/api/product/:id', productController.get_product);
router.post('/api/uploadProduct', productController.upload_product);
router.put('/api/editProduct/:id', productController.edit_product);
router.delete('/api/products/delete/:id', productController.delete_product);

//Category
router.get('/api/categories', categoryController.get_categories);
router.get('/api/category/:id', categoryController.get_category);
router.post('/api/uploadCategory', categoryController.upload_category);
router.put('/api/editCategory/:id', categoryController.edit_category);
router.delete('/api/categories/delete/:id', categoryController.delete_category);


module.exports = router;
