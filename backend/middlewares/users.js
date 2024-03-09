const User = require('../models/user')

const fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    req.users = users; // Attach recipes to request object
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = fetchUsers