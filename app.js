"use strict"

var express = require("express");
var bodyParser = require("body-parser");

// app is express object
var app = express();

// convert object to json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes
var userRoute = require("./routes/user.route.js");
var slideRoute = require("./routes/slide.route.js");
var galeryRoute = require("./routes/galery.route.js");

// base route
app.use("/api", userRoute);
app.use("/api", slideRoute);
app.use("/api", galeryRoute);

// require, response
app.get("/test", function(req, res){
	//console.log("/test");
	res.status(200).send({message: "welcome"});
});

module.exports = app;