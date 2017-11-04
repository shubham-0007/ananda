var express = require('express');
var app = express();
var cors = require('cors');

var router = require("./router");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json());
app.use(cors());

	
app.use("/",router);
var server = app.listen(8081,function () {
	// body...
	console.log("hello I am Running");
})           
