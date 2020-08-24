var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080


app.get("/", (req,res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.listen(port)