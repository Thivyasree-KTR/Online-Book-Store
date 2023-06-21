var express = require('express');

var userController = require('../src/users/userController');
const router = express.Router();
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/book').post(userController.dispBook);
router.route('/user/cart').post(userController.addToCart);

router.route('/user/cartdisp').post(userController.displayCart);
router.route('/user/wishdisp').post(userController.displayWish);
router.route('/user/ordersdisp').post(userController.displayOrders);
router.route('/user/cartupdt').post(userController.updateCart);
router.route('/user/cartitemdel').post(userController.delItem);
router.route('/user/add').post(userController.addBook);
router.route('/user/retrieve').post(userController.retrieveBook);
router.route('/user/updt').post(userController.updateBook);
router.route('/user/delete').post(userController.deleteBook);
router.route('/user/fiction').post(userController.fictionBooks);
router.route('/user/contact').post(userController.sendFeedback);
router.route('/user/search').post(userController.searchBook);
router.route('/user/deleteCart').post(userController.deleteCart);
router.route('/user/movetocart').post(userController.moveToCart);
router.route('/user/movetocart1').post(userController.moveToCart1);
router.route('/user/wish').post(userController.addToWishlist);
module.exports = router;