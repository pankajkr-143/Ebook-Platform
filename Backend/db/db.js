const mongoose = require("mongoose");

function connectToDb() {
  return mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      console.log("Connected to db");
    });
}

module.exports = connectToDb;