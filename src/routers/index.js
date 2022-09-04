const router = require("express").Router();
const { validateUsers } = require("../contollers/users");
const { credits } = require("../contollers/credits");
const { registerSold } = require("../contollers/sold");
const { spent } = require("../contollers/spents");
const { box } = require("../contollers/box");

//Ruta encargada de validar usuarios
router.post("/user", validateUsers);
//Ruta encargada de los fiados o creditos
router.post("/credits");
//Ruta encargada de los gatos
router.post("/spent");
//Ruta encargada de la caja
router.post("/box");
//Ruta encargada de venta
router.get("/sold", registerSold);

module.exports = router;
