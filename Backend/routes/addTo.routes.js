const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userControllers = require("../controllers/user.controllers");
const { authUser } = require("../middlewares/auth.middleware");
const {
  validateRequest,
  registerValidationRules,
  loginValidationRules,
} = require("../middlewares/validationMiddleware");
const cartControllers = require("../controllers/cart.controllers");
const wishListControllers = require("../controllers/wishList.controllers");




// Add to cart
router.post("/cart", authUser, cartControllers.cartData);

// Get cart data
router.get("/cart", authUser, cartControllers.getCartData);

// Add to wishlist
router.post("/wishlist", authUser, wishListControllers.wishListData);

// Get wishlist data
router.get("/wishlist", authUser, wishListControllers.getWishListData);


module.exports = router;
