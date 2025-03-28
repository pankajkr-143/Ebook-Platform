const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
// const addToRoutes = require('./routes/addTo.routes');
const bodyParser = require("body-parser");
connectToDb();
const cart = require("./models/cart.model");
const wishList = require("./models/wishList.model"); // Import the correct model

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World india!');
});

app.use('/api/users', userRoutes);
// app.use('/api/addTo', addToRoutes);


app.post("/wishlist", async (req, res) => {
  try {
    const newItem = new wishList(req.body); // Use the wishList model
    const savedItem = await newItem.save();
    res.status(201).json({ message: "Wishlist item saved successfully", savedItem });
    console.log("savedItem", savedItem);
  } catch (error) {
    res.status(500).json({ message: "Error saving wishlist item", error });
  }
});

app.post("/cart", async (req, res) => {
  try {
    const newItem = new cart(req.body); // Use the wishList model
    const savedItem = await newItem.save();
    res.status(201).json({ message: "cart item saved successfully", savedItem });
    console.log("savedItem", savedItem);
  } catch (error) {
    res.status(500).json({ message: "Error saving cart item", error });
  }
});

module.exports = app;
