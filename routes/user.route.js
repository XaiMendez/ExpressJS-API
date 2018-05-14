"use strict"

var express = require("express");

// loading controller module
var userController = require("../controller/user.controller.js");


// loading router from express.js
var api = express.Router();

// routes
api.get("userTest", userController.testUser);

// create user
api.post("user", userController.createUser);

module.exports = api;