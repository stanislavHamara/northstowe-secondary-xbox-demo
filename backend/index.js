var express = require('express');
var fs = require("fs");

var app = express();

app.get('/products', function (req, res) {
    res.end(JSON.stringify({ data: "someData" }))
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})