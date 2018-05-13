"use strict"

var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

// schema with attributes

var userSchema = Schema({
	user: String,
	password: String
})

module.exports = mongoose.model("usuarios", userSchema);