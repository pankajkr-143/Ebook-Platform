const userModels = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModels = require('../models/blacklistToken.model');

// Helper function for validation
const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};



module.exports.registerUser = async (req, res) => {

  if (handleValidationErrors(req, res)) return;

  const { fullname, email, password } = req.body;

  try {

    const isUserAlreadyExist = await userModels
      .findOne({ email });
    if (isUserAlreadyExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await userModels.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword
    });

    if (user) {
      const token = user.generateAuthToken();
      res.status(201).json({ token,  user: {userId: user._id}, userInfo: { user } });
  } else {
    res.status(400).json({ message: 'Registration failed' });
  }
} catch (error) {
  console.error(`Error registering user: ${error.message}`);
  res.status(500).json({ message: 'Internal server error' });
}};

// Login a user and verify the field values.
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try{
    const user = await userModels.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    //compare password
    const isMatch = await user.comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password'});
  }
  const token = user.generateAuthToken();
  const userId = user._id.toString();

  res.cookie('token', token);
  res.status(200).json({ token, user: {userId} });
  } catch (error) {
    console.error(`Error logging in user: ${error.message}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
  
module.exports.getUserProfile = async (req, res) => {
  const user = await userModels.findById(req.user._id);
  res.status(200).json(user);
}

module.exports.logoutUser = async (req, res) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await blacklistTokenModels.create({ email: req.user.email, token });
  res.status(200).json({ message: 'Logout successfully' });
}

