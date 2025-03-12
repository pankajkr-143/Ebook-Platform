const userModels = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    const isBlacklisted = await userModels.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Access Denied' });
    }
    
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModels.findById(verified._id);
        req.user = user;
        return next();
    } catch (error) {
        res.status(401).json({ message: 'unauthorized' });
    }
};