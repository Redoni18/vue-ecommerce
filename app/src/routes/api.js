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
const orderController = require('../controllers/orderController');
const payMethodController = require('../controllers/payMethodController');
const reviewsController = require('../controllers/reviewsContoller');
const contactController = require('../controllers/contactController');
const wishlistController = require('../controllers/wishlistController');
const pendingOrderController = require('../controllers/pendingOrderController')

/**
 * Routes
 */


//products
router.get('/api/products', productController.get_products);
router.get('/api/product/:id', productController.get_product);
router.post('/api/uploadProduct', productController.validate('upload_product'), productController.upload_product);
router.put('/api/editProduct/:id', productController.validate('edit_product'), productController.edit_product);
router.delete('/api/products/delete/:id', productController.delete_product);

//get products based on categories saved in cookies
router.get('/api/product-cookies', productController.getProductsByCategoriesCookie);


//Category
router.get('/api/categories', categoryController.get_categories);
router.get('/api/category/:id', categoryController.get_category);
router.post('/api/uploadCategory', categoryController.validate('upload_category'), categoryController.upload_category);
router.put('/api/editCategory/:id', categoryController.validate('edit_category'), categoryController.edit_category);
router.delete('/api/categories/delete/:id', categoryController.delete_category);

//Upcoming
router.get('/api/upcomings', upcomingController.get_upcomings);
router.get('/api/upcoming/:id', upcomingController.get_upcoming);
router.post('/api/uploadUpcoming', upcomingController.validate('upload_upcoming'), upcomingController.upload_upcoming);
router.put('/api/editUpcoming/:id', upcomingController.validate('edit_upcoming'), upcomingController.edit_upcoming);
router.delete('/api/upcomings/delete/:id', upcomingController.delete_upcoming);

//Brands
router.get('/api/brands', brandsController.get_brands);
router.get('/api/brands/:id', brandsController.get_brand);
router.post('/api/uploadBrand', brandsController.validate('upload_brand'), brandsController.upload_brand);
router.put('/api/editBrand/:id', brandsController.validate('edit_brand'), brandsController.edit_brand);
router.delete('/api/brands/delete/:id', brandsController.delete_brand);

//Order
router.get('/api/orders', orderController.get_orders);
router.get('/api/order/:id', orderController.get_order);
router.post('/api/uploadOrder', orderController.validate('upload_order'), orderController.upload_order);
router.put('/api/editOrder/:id', orderController.validate('edit_order'), orderController.edit_order);
router.delete('/api/orders/delete/:id', orderController.delete_order);


router.post('/api/insertUser', userController.insert_user);
router.get('/api/user/:uid', userController.get_user);


//PayMethods
router.get('/api/paymethods', payMethodController.get_paymethods);
router.get('/api/paymethod/:id', payMethodController.get_paymethod);
router.post('/api/uploadPayMethod', payMethodController.validate('insert_paymethods'), payMethodController.insert_paymethods);
router.put('/api/editPayMethod/:id',  payMethodController.validate('edit_paymethods'), payMethodController.edit_paymethods);
router.delete('/api/paymethods/delete/:id', payMethodController.delete_paymethods);

router.get('/api/filterProduct', productController.findProductByName);
router.get('/api/filterProductsByBrand/:category', productController.filterProductsByBrand)

//Reviews
router.get('/api/reviews', reviewsController.get_reviews);
router.get('/api/review/:id', reviewsController.get_review);
router.post('/api/uploadReview', reviewsController.upload_review);
router.put('/api/editReview/:id', reviewsController.edit_review);
router.delete('/api/reviews/delete/:id', reviewsController.delete_review);
router.get('/api/getReviewsByProductId/:productId', reviewsController.getReviewsByProductId)

//Contact us
router.get('/api/contacts', contactController.get_contacts);
router.get('/api/contact/:id', contactController.get_contact);
router.post('/api/uploadContact', contactController.insert_contacts);
router.delete('/api/contacts/delete/:id', contactController.delete_contacts);

//Wishlist
router.get('/api/wishlists', wishlistController.get_wishlists);
router.get('/api/wishlist/:id', wishlistController.get_wishlist);
router.post('/api/uploadWishlist', wishlistController.insert_wishlists);
router.put('/api/editWishlist/:id', wishlistController.edit_wishlists);
router.delete('/api/wishlists/delete/:id', wishlistController.delete_wishlists);


//Stripe checkout session
router.post('/api/create-checkout-session/:id', productController.stripeCheckoutSession);
//Stripe webhook
router.post('/stripe/webhook', productController.stripeWebhook);
//Stripe get last payment
// router.get('/api/stripe/last-payment', productController.getLastPayment)

//pending stripe orders
router.get('/api/pending-orders', pendingOrderController.get_pending_orders);
router.post('/api/uploadPendingOrder', pendingOrderController.validate('upload_pending_order'), pendingOrderController.upload_pending_order);
router.delete('/api/pending/delete/:id', pendingOrderController.delete_pending_order);


module.exports = router;