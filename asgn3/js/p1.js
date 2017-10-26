// You need to "require" persons.js in this file to access the array of persons
var persons = require('./persons');


module.exports = function(req, res) {

  // Size of JSON
  var iPersons = Object.keys(persons).length;

  // Create an empty array, Q
  var Q = [];


  // Let S be this string
  // var str = '12345678value';
  // var strshortened = str.slice(0,8);
  // alert(strshortened); //=> '12345678'

  // Retrieve the "prefix" string from the request
  var S = req;

  if(typeof S == 'undefined' || S == ''){
    for(var i = 0; i < iPersons; i++){
      var myObject = persons[i];
      Q.push(myObject);
    }
  } else{
    // Append P[i] to Q if S is a prefix of P[i].name
    for(var i = 0; i < iPersons; i++){
      if(persons[i].name.includes(S)){
        var myObject = persons[i];
        Q.push(myObject);
      }
    }
  }

  // Let P be the array of persons



  console.log('Q now Contains: ' + Q.length);


  // Note: Empty string is treated as a prefix for all strings

  // Send Q in the body of the response

  return Q;
}
