//To define routes for client request create routes folder and router.js file
const express = require('express')

// import product controller
const productController = require('../controllers/productController')

// import wishlist controller
const wishlistController = require('../controllers/wishlistController')

// import cart controller
const cartController = require('../controllers/cartController')


// using express create object for router class inorder to setup path
const router = new express.Router()



// resolve client request in various server router

// api

// get-all products
router.get('/products/all-products',productController.getallproducts)

// view-product/id
router.get('/products/view-product/:id',productController.viewproduct)

// add-to-wishlist
router.post('/wishlist/add-product',wishlistController.addtowishlist)

// get-wishlist-item
router.get('/wishlist/get-items',wishlistController.getwishlistItems)

// remove-wishlist-item
router.delete('/wishlist/remove-item/:id',wishlistController.removefromwishlist)

// add to cart
router.post('/cart/add-product',cartController.addtocart)

// get cart
router.get('/cart/all-products',cartController.getCart)

// remove-cart-item
router.delete('/cart/remove-item/:id',cartController.removecartitems)

// empty cart
router.delete('/cart/remove-all-items',cartController.emptycart)

// increment product quantity in cart
router.get('/cart/increment-quantity/:id',cartController.incrementCount)

// decrement product quantity in cart
router.get('/cart/decrement-quantity/:id',cartController.decrementCount)

// export router
module.exports = router