"use strict"

var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

// schema with attributes

var galeriaSchema = Schema({
	photo: String
})

module.exports = mongoose.model("galerias", galeriaSchema);