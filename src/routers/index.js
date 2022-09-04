const router = require("express").Router();
const { validateUsers } = require("../contollers/users");

router.post("/users", validateUsers);

module.exports = router;
