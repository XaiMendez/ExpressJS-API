"use strict"

// test function
function test(req, res){
	res.status(200).send({message: "hello from slideController"});
}

// import user model
var user = require("../models/slide.model.js");

// create user
function createSlide(req, res){

	// get object from user model
	var users = new user();

	// params from body request
	var params = req.body;
	//console.log(params);

	users.user = params.user;
	users.password = params.password;
	res.status(200).send({message: "hello from user controller"});
}

// Exporting methos from module
module.exports = {
	test,
	createSlide
}