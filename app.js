const express = require("express");
const app = express();
const morgan = require("morgan");
const routers = require("./src/routers/index");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routers);

module.exports = app;
