var express = require('express');
var ejs = require('ejs');
var port = process.env.PORT || 8888;

var app = express();

app.listen(port, function () {
    console.log("Listening on port: ", port);
});
