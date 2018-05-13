"use strict"

var express = require("express");
var bodyParser = require("body-parser");

// app is express object
var app = express();


// load routes

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// base route
// require, response
app.get("/test", function(req, res){

	res.status(200).send({message: "welcome"});
});

module.exports = app;