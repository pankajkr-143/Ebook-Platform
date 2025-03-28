const wishList = require("../models/wishList.model");

const wishListData = async (req, res) => {
  try {
    const userId = req.user._id; // Get the logged-in user's ID from the request
    const { products } = req.body;

    // Check if the user already has a wishlist
    let userWishlist = await wishList.findOne({ userId });

    if (userWishlist) {
      // Update the existing wishlist
      userWishlist.products = [...userWishlist.products, ...products];
      await userWishlist.save();
    } else {
      // Create a new wishlist for the user
      await wishList.create({ userId, products });
    }

    return res.status(200).json({ message: "Added to wishlist successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getWishListData = async (req, res) => {
  try {
    const userId = req.user._id; // Get the logged-in user's ID from the request
    const userWishlist = await wishList.findOne({ userId });

    if (!userWishlist) {
      return res.status(404).json({ message: "Wishlist is empty" });
    }

    return res.status(200).json(userWishlist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { wishListData, getWishListData };

