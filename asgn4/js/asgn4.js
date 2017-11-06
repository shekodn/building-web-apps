var model = require('./model.js');

// A "Router" object allows a module to perform "local" routing

var router = require('express').Router();

// This module will be used as a router
module.exports = router;

// Return a user object with two properties (username and email)
// if the specified username exists in DB
router.get('/getuser/:username', function(req, res) {
  console.log(req.params.username);
  var username = req.params.username;

  model.User.findOne(
    { username: username },
    'username email',   // Don't send password

    function(err, user) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.json(user);
    });
  });

  // TODO: Add your code here

  // For TODO 1
  router.get('/p1', function(req, res) {

    // retrieve all users from DB
    model.User.find({}, function(err, users){

      if(err){
        res.send('Error');
        next();

      } else {

        // Return them in JSON format
        res.send(users);
      }
    });



  });

  // For TODO 2
  router.get('/p2', function(req, res) {

    var person = {username: req.query.username, email: req.query.email, password: req.query.password};

    model.User.create({username: person.username, email: person.email, password: person.password}, function (err, doc) {

      if (err){
        res.send('Error');
      } else{
        res.send(person);
      }
    });

  });

  // For TODO 3
  router.get('/p3', function(req, res) {

    var query = req.query.tag.trim();

    console.log(query);

    //If query is empty, return all items
    if (query == ''){
      model.Item.find({} , function(err, items){
        if(err){
          res.send('Error');
          next();
        } else {
          // Return all items
          res.send(items.length + " items <br>" + items);
        }
      });
    } else {
      model.Item.find({"tags" : { $in : [query]  } } , function(err, items){
        if(err){
          res.send('Error');
          next();
        } else {
          // Return them in JSON format
          if(items.length > 0){
            res.send(items.length + " Items found with <strong>" + query + " </strong> tag <br> <br>" + items);
          } else{
            res.send("Sorry, no items found with <strong>" + query + " </strong> tag");
          }
        }
      });
    }
  });

  // For TODO 4
  router.get('/p4', function(req, res) {

    res.send("Not yet implemented.");  // Place holder
  });

  // For TODO 5
  router.get('/p5', function(req, res) {
    res.send("Not yet implemented.");  // Place holder
  });
