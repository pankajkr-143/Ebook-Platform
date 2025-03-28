const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
      image: {
        type: String, // Base64 string or URL
      },
      title: {
        type: String,
        required: true,
      },
      
      price: {
        type: Number,
        required: true,
      },
      originalPrice: {
        type: Number,
        required: true,
      },
      discount: {
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

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
