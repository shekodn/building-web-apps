// You need to "require" persons.js in this file to access the array of persons
var persons = require('./persons');

module.exports = function(req, res) {

  // Retrieve the "person" object from the request.
  // You may assume the "person" object is valid
  // Let Q be this object
  var Q = req;

  // Let P be the array of persons
  var P = persons;

  // Replace P[i] by Q if P[i].index == Q.index
  console.log("Before: ");
  console.log(P[Q.index]);
  P[Q.index] = Q;
  console.log(" After: ");
  console.log(P[Q.index]);

  // Send 1 in the body of the response if a replacement successfully
  // took place.
  // Otherwise, send 0 in the body of the response.

}
