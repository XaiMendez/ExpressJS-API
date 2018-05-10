"use strict"

// mongoose (intermediate with db)
// load library
var mongoose = require("mongoose");

// Connection to db
mongoose.connect("mongodb://localhost:27017/mongo_db", (error, respuesta) => {

	if(error){
		throw error;
	}else{
		console.log("conection successfully")
	}
})