"use strict"

// mongoose (intermediate with db)
// load library
var = mongoose = require("mongoose");

// Connection to db
mongoose.connect("mongodb://localhost27017/mongodb", (error, respuesta) =>{

	if(error){
		throw error;
	}else{
		console.log("conection successfully")
	}
})