require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./router/index.js");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middlewares/errorHandler.js");
const app = express();

// allow cors
app.use(cors());
// body parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.set("view engine", "ejs");
// file upload
app.use(fileUpload());
// router
app.use("/api/v1", routes);
app.use(errorHandler);
// error handling

module.exports = app;
