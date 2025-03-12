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
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours
  }
});


module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);