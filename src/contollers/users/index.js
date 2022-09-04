const { users } = require("../../../data");

const validateUsers = async (req, res, next) => {
  const { contactPhoneNumber } = req.body;
  if (!users.includes(contactPhoneNumber)) {
    users.push({ ...req.body, sold: [] });
    res.json({ res: "register succesful" });
  } else {
    res.json({
      res: users.filter(
        (res) => res.contactPhoneNumber == contactPhoneNumber
      )[0].contactPhoneNumber,
    });
  }
};

const listUser = (req, res) => {
  res.json({ res: users });
};

module.exports = {
  validateUsers,
  listUser,
};
