const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User collection
    required: true,
    ref: "User",
  },
  products: [
    {
      id: {
        type: Number, // Unique product ID
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String, // Base64 string or URL
      },
      price: {
        type: Number,
        required: true,
      },
      isNew: {
        type: Boolean,
        default: false,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      reviews: {
        type: Number,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const wishList = mongoose.model("wishList", wishListSchema);

module.exports = wishList;
