// You need to "require" persons.js in this file to access the array of persons
var persons = require('./persons');


module.exports = function(req, res) {

  // Size of JSON
  var iPersons = Object.keys(persons).length;

  // Create an empty array, Q
  var Q = [];

  // Inserts JSON into Q
  for(var i = 0; i < iPersons; i++){
    var myObject = persons[i];
    Q.push(myObject);
  }

  // Retrieve the "prefix" string from the request

  // Let S be this string

  // Let P be the array of persons


  // Append P[i] to Q if S is a prefix of P[i].name
  // Note: Empty string is treated as a prefix for all strings

  // Send Q in the body of the response
}
