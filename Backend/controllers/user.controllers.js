const userModels = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModels = require('../models/blacklistToken.model');


module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  console.log(req.body);

  const { fullname, email, password } = req.body;
  const hashPassword = await userModels.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword
  });

  const token = user.generateAuthToken();

  res.cookie =('token', token);

  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModels.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password'});
  }
  const isMatch = await user.comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password'});
  }

  const token = user.generateAuthToken();

  res.status(200).json({ user, token });

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

