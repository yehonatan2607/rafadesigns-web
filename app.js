var express = require("express");
var path = require("path");

var app = express();
const PORT = process.env.PORT || 8080

app.listen(PORT);
console.log("server listening in port ", PORT);