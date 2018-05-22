"use strict"

// load express dependency
var express = require("express");

// loading controller module
var userController = require("../controllers/user.controller.js");

// loading router from express.js
var api = express.Router();

// routes
api.get("/user/test", userController.test);

// USER
api.post("/user", userController.createUser);
api.post("/login", userController.loginUser);

module.exports = api;