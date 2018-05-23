"use strict"

// test function
function test(req, res){
	res.status(200).send({message: "hello from userController"});
}

// import user model
var User = require("../models/user.model.js");

// import bcrypt-nodejs
var bcrypt = require("bcrypt-nodejs");

// import jwt-simple
var token = require("../token/jwt.js");

// create user
function createUser(req, res){

	// get object from user model
	var users = new User();

	// params from body request
	var params = req.body;
	//console.log(params);

	users.user = params.user;
	if(params.password){
		bcrypt.hash(params.password, null, null, function(error, hash){
			users.password = hash;
			if(users.user){
				// saving in the db
				(users).save((error, success)=>{
					if(error){
						res.status(500).send({message:"Error trying to save"});
					}else{
						res.status(201).send({message:"Saved successfully"});
					}
				});
			}
		});
	}

	
}

// login user
function loginUser(req, res){

	var params = req.body;
	var userP = params.user;
	var passwordP = params.password;

	User.findOne({user:userP}, (error, user)=>{
		if(error){
			res.status(500).send({message:"Error entering user"});
		}else{

			if(!userP){
				res.status(404).send({message:"User not found"});
			}else{
				//console.log(user);
				bcrypt.compare(passwordP, user.password, function(error, success){
					if(success){
						
						//res.status(200).send({user});
						// send token param like true
						if(params.token){
							// return jwt
							res.status(200).send({token: token.createToken(user)});
						}


					}else{
						res.status(404).send({message:"The user could not enter"});
					}
				});
			}

		}
	});


}

// Exporting methos from module
module.exports = {
	test,
	createUser,
	loginUser
}