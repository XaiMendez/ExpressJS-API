"use strict"

// load express dependency
var express = require("express");

// loading controller module
var galeryController = require("../controllers/galery.controller.js");

// loading router from express.js
var api = express.Router();

// routes
api.get("/galery/test", galeryController.test);

api.post("/galery", galeryController.createGalery);

module.exports = api;