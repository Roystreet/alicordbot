const router = require("express").Router();
const { validateUsers } = require("../contollers/users");

router.get("/users", validateUsers);

module.exports = router;
