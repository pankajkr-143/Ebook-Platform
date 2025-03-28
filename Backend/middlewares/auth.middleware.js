const userModels = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blacklistToken.model");

// Middleware to check if user is authenticated and token is valid
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  // Check if the token is blacklisted
  const isBlacklisted = await blackListTokenModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModels
      .findById(verified._id)
      .select("username email");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    // Attach the user to the request object for further use
    req.user = user;
    req.token = token;
    req.userID = user._id;
    return next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
  }
};
