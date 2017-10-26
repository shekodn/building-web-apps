var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Use "require()" to obtain the functions from
// p1.js and p2.js
var p1 = require('./js/p1.js');
var p2 = require('./js/p2.js');

//Contains Q (array of persons)


app.get('/index', function(req, res){

  var prefix = req.query.prefix;
  console.log(prefix);
  var persons = p1(prefix);
  res.send(persons); //replace with your data here


});

// Add routing rules in this file so that
// (1) Any GET request sent to "/services/p1"
// will be handled by the function exported by p1.js.
app.get('/services/p1', function(req, res){
  var persons = p1('');
  res.send(persons); //replace with your data here
});


// (2) Any POST request sent to "/services/p2"
// will be handled by the function exported by p2.js.
// app.post('/services/p2', function(req, res){
//   console.console.log("post!");
//   var person = req.query;
//   var p = req;
//   console.log(req);
// });






/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */

app.post("/services/p2", function (req, res) {
    console.log('this is a post');
    var obj = {};
  	console.log('body: ' + JSON.stringify(req.body));
});




// For POST requests, you may need to use a body-parser
// to decode its body here first.




app.use('/', express.static('public'));


app.listen(8081);
