"use strict"

// mongoose (intermediate with db)
// load library

var mongoose = require("mongoose");


// EXPRESS MODULE
var app = require("./app.js");
// enviroment var
var port = process.env.PORT || 1234;


// Connection to db


mongoose.connect("mongodb://user_db:pass_db@ds033106.mlab.com:33106/test_db", (error, respuesta) => {

	if(error){
		console.log(":: Conection fail ::");
		throw error;
	}else{
		console.log(":: Conection Successfully ::");

		app.listen(port, function(){
			console.log(":: API REST SERVER IN http://localhost:" + port + "/");
		})
	}
})
