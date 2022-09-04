const { users } = require("../../../data");

const validateUsers = async (req, res, next) => {
  const { caja } = req.body;

  users.push(caja);
  res.json({ users: users });
};

module.exports = {
  validateUsers,
};
