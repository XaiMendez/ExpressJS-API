"use strict"

// test function
function test(req, res){
	res.status(200).send({message: "hello from galeryController"});
}

// import galeria model
var user = require("../models/galeria.model.js");

// create galeria
function createGalery(req, res){

	// get object from galeria model
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
	createGalery
}