"use strict"

// mongoose (intermediate with db)
// load library
var mongoose = require("mongoose");


// EXPRESS MODULE
var app = require("/.app.js");
// enviroment var
var port = process.env.PORT || 1234;


// Connection to db
mongoose.connect("mongodb://localhost:27017/mongo_db", (error, respuesta) => {

	if(error){
		throw error;
	}else{
		console.log("conection successfully")
	}
})