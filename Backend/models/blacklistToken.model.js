const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unqiue: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});


module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);