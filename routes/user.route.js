"use strict"

// load express dependency
var express = require("express");

// loading controller module
var userController = require("../controllers/user.controller.js");

// loading router from express.js
var api = express.Router();

// routes
api.get("/user/test", userController.test);

api.post("/user", userController.createUser);

module.exports = api;