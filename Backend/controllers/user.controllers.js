const userModels = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');


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

  res.status(201).json({ user, token });
};