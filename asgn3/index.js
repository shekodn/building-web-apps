var express = require('express');
var app = express();

// Use "require()" to obtain the functions from
// p1.js and p2.js
var p1 = require('./js/p1.js');
var p2 = require('./js/p2.js');

// Add routing rules in this file so that
// (1) Any GET request sent to "/services/p1"
// will be handled by the function exported by p1.js.
// (2) Any POST request sent to "/services/p2"
// will be handled by the function exported by p2.js.
//
// For POST requests, you may need to use a body-parser
// to decode its body here first.

console.log('index.js is working');

p1("LOL");

app.use('/', express.static('public'));


app.listen(8081);
