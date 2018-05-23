"use strict"


// require dependency
var token = require("jwt-simple");

// moment
var moment = require("moment");

var secretKey = "secret key";


// token method

exports.createToken = function(userP){
	// data
	var loadToken = {
		// object id
		sub: userP._id,
		name: userP.user,
		// timestamp format
		now: moment().unix(),
		exp: moment().add(30, "days").unix()
	}

	return token.encode(loadToken, secretKey)
}