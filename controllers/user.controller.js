"use strict"

// test method
function testUser(req, res){
	res.status(200).send({message: "hello from user controller"});
}

// import user model
var user = require("./models/user.model.js");

// create user
function createUser(req, res){

	// get object from user model
	var users = new user();

	var params = req.body;
	//console.log(params);

	res.status(200).send({message: "hello from user controller"});
}

// Exporting methos from module
module.exports = {
	testUser
}