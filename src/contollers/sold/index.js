const users = require("../../../data");
const registerSold = (req, res, next) => {
  const { caja, gastos, contactPhoneNumber } = req.body;
  const sold = parseInt(caja) + parseInt(gastos);
  let key;
  for (let i = 0; i < users.length; i++) {
    if (users[i].contactPhoneNumber == contactPhoneNumber) {
      key = i;
    }
  }
  users[key].sold.push(sold);
  res.json({ res: sold });
};

module.exports = {
  registerSold,
};
