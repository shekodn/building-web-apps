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
        // res.send(err);
        res.send('Error');
      } else{
        console.log(doc);
        // res.write(person.toString());
        res.write("{_id:\":\"" + doc.id + ",\"username:\"" + person.username + ",\"email:\"" + person.email + "\"}");
        //{"_id":"5a06c9b2f2f57e62d10e24ea","username":"john","email":"john@example.com"}
        res.end();
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

    var query_name = req.query.username.trim(); //owner
    var id;

    //gets the ID of the user
    model.User.find({"username" : { $in : [query_name]  } }, function(err, users){
      if(err){
        res.send('error');
      } else {
        if(users.length > 0){
          id = users[0].id;

          model.Item.find({"owner" : id}, function(err, items){
            if(err) {
              res.send('error');
            } else {

              res.write(items.length  + " items were deleted " + items);

              model.Item.remove({"owner" : id}, function(err, items){

               if(err) {
                 res.send('error');
               } else {
                 res.end();
               }
             });
            }
          });
        } else{
          res.send("User not found");
        }
      }
    });
  });

  // For TODO 5
  // Add a tag named "asgn4" to all items owned by the specified user:
  router.get('/p5', function(req, res) {

    var query_name = req.query.username.trim(); //owner
    var id;

    //gets username id
    model.User.find({"username" : { $in : [query_name]  } }, function(err, users){
      if(err){
        res.send('error');
      } else {
        if(users.length > 0){
          id = users[0].id;

          // uses the retrieved id to add asgn4 into tags attribute in Item model
          model.Item.updateMany({"owner" : id}, { $push: { tags: 'asgn4' } }, function(err, result){
            if(err) {
              res.send('error');
            } else {

              res.write(result.nModified + ' items were modified');
              // Finds all items
              // the response should contain all the updated item objects
              model.Item.find({"owner" : id}, function(err, items){
                if(err) {
                  res.send('error');
                } else {
                  console.log(items);
                  res.write(items.toString());
                  res.end();
                }
              });
            }
          });
        } else{
          res.send("User not found");
        }
      }
    });
  });
