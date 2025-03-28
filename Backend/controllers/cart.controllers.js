// const cart = require("../models/cart.model");

// const cartData = async (req, res) => {
//   try {
//     const userId = req.user._id; // Get the logged-in user's ID from the request
//     const { products } = req.body;

//     // Check if the user already has a cart
//     let userCart = await cart.findOne({ userId });

//     if (userCart) {
//       // Update the existing cart
//       userCart.products = [...userCart.products, ...products];
//       await userCart.save();
//     } else {
//       // Create a new cart for the user
//       await cart.create({ userId, products });
//     }

//     return res.status(200).json({ message: "Added to cart successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// const getCartData = async (req, res) => {
//   try {
//     const userId = req.user._id; // Get the logged-in user's ID from the request
//     const userCart = await cart.findOne({ userId });

//     if (!userCart) {
//       return res.status(404).json({ message: "Cart is empty" });
//     }

//     return res.status(200).json(userCart);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { cartData, getCartData };
