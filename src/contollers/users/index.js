const { users } = require("../../../data");

const validateUsers = async (req, res, next) => {
  const { user } = req.body;

  users.push(user);
  res.json({ users: users });
};

module.exports = {
  validateUsers,
};
