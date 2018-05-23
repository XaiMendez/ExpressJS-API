"use strict"

// load express dependency
var express = require("express");

// loading controller module
var userController = require("../controllers/user.controller.js");

// loading router from express.js
var api = express.Router();

// import middleware
var middlewareAuth = require("../token/auth.js");

// routes
api.get("/user/test", middlewareAuth.authentication, userController.test);

// USER
api.post("/user", userController.createUser);
api.post("/login", userController.loginUser);

module.exports = api;