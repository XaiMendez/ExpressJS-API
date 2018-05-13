"use strict"

// test method
function testUser(req, res){
	res.status(200).send({message: "hello from user controller"});
}

// Exporting methos from module
module.exports = {
	testUser
}