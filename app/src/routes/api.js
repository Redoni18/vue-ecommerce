const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const upcomingController = require('../controllers/upcomingController');
const brandsController = require('../controllers/brandsController');

/**
 * Routes
 */


//products
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

//Upcoming
router.get('/api/upcomings', upcomingController.get_upcomings);
router.get('/api/upcoming/:id', upcomingController.get_upcoming);
router.post('/api/uploadUpcoming', upcomingController.upload_upcoming);
router.put('/api/editUpcoming/:id', upcomingController.edit_upcoming);
router.delete('/api/upcomings/delete/:id', upcomingController.delete_upcoming);

//Brands
router.get('/api/brands', brandsController.get_brands);
router.get('/api/brands/:id', brandsController.get_brand);
router.post('/api/uploadBrand', brandsController.upload_brand);
router.put('/api/editBrand/:id', brandsController.edit_brand);
router.delete('/api/brands/delete/:id', brandsController.delete_brand);



router.post('/api/insertUser', userController.insert_user);
router.get('/api/user/:uid', userController.get_user);


module.exports = router;
