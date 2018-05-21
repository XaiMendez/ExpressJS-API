"use strict"

// load express dependency
var express = require("express");

// loading controller module
var slideController = require("../controllers/slide.controller.js");

// loading router from express.js
var api = express.Router();

// routes
api.get("/slide/test", slideController.test);

api.post("/slide", slideController.createSlide);

module.exports = api;