"use strict"

var express = require("express");
var bodyParser = require("body-parser");

// app is express object
var app = express();


// load routes

app-use(bodyParser.urlenconded({extended:false}));
app.use(bodyPaser.json());

// base route
// require, response
app.get("/test", function(req, res){

	res.status(200).send({message: "welcome"});
});