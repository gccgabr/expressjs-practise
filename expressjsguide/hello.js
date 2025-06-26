"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
	//res.end(req.host);
	res.end(req.ip);
});

app.listen(port, function() {
	console.log("Server running on https://localhost:%s.", port);
});
