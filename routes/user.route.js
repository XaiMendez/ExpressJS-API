"use strict"

var express = require("express");

// loading controller module
var userController = require("../controller/user.controller.js");


// loading router from express.js
var api = express.Router();


api.get("userTest", userController.testUser);

module.exports = api;