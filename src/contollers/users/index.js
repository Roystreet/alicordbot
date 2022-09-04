const { users } = require("../../../data");

const validateUsers = async (req, res, next) => {
  const body = req.body;

  users.push(body);
  res.json({ users: users });
};

module.exports = {
  validateUsers,
};
