const { restart } = require("nodemon");
const { users } = require("../../../data");
const registerSold = (req, res, next) => {
  const { caja, gasto, contactPhoneNumber } = req.body;
  const { body } = req;
  const sold = parseInt(caja) + parseInt(gasto);
  let key;
  for (let i = 0; i < users.length; i++) {
    if (users[i].contactPhoneNumber == contactPhoneNumber) {
      key = i;
    }
  }
  users.push({ ...body, sold: sold });
  res.json({ res: "exitosa" });
};

const getVenta = (req, res, next) => {
  const lastSold = users.length - 1;

  res.json({ venta: users[lastSold].sold });
};

module.exports = {
  registerSold,
  getVenta,
};
