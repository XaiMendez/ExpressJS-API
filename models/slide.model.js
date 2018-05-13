"use strict"

var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

// schema with attributes

var slideSchema = Schema({
	image: String,
	title: String,
	description: String
})

module.exports = mongoose.model("slides", slideSchema);