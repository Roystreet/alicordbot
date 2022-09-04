const router = require("express").Router();
const { validateUsers, listUser } = require("../contollers/users");
const { credits } = require("../contollers/credits");
const { registerSold, getVenta } = require("../contollers/sold");
const { spent } = require("../contollers/spents");
const { box } = require("../contollers/box");

//Ruta encargada de validar usuarios
router.post("/user", validateUsers);
router.get("/users", listUser);
//Ruta encargada de los fiados o creditos
router.post("/credits");
//Ruta encargada de los gatos
router.post("/spent");
//Ruta encargada de la caja
router.post("/box");
//Ruta encargada de venta
router.post("/sold", registerSold);
router.get("/venta", getVenta);

module.exports = router;
