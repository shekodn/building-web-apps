let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:false});
let session = require('express-session');

let auth = require('./js/auth.js');

app.use( session({
    secret: 'mysecretkey',
    resave: false,            // save session only if session data have been
                              // modified
    saveUninitialized: false  // save session if it is not empty
                              // after it is first created
}));


// Send a HTML file that contain the login interface
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Authentication data should be sent via POST method
app.post('/login', urlencodedParser, auth.loginCB);

app.get('/logout', auth.logoutCB);

app.get('/getLoginElapsedTime', (req, res) => {

  if(req.session.cookie.expires){

    //actual time
    var hour = 3600000

    var actual_timeDate = (Date.now() + hour)

    var time_reamining = actual_timeDate - (req.session.cookie.expires)
    var seconds = time_reamining / 1000; //1440516958
    console.log( req.session.cookie);
    res.send(seconds + " secs remaining");
  } else {
    req.session.cookie.expires = (Date.now() + hour);
    var time = req.session.cookie.expires
    res.send("Welcome to this page for the first time! " + time);
  }

  // res.write(req.session)
  res.send(req.session.cookie)
  // res.end()
  // Exercise #1:
  // Write code here to send the elapsed time in the response.


  // if(req.session.time){
  //    req.session.time++;
  //    res.send("You visited this page " + req.session.time + " times");
  //
  // } else {
  //    req.session.time = 1;
  //    res.send("Welcome to this page for the first time!");
  //
  // }

});



/*
app.get('/getLoginElapsedTime', (req, res) => {
  if (req.session.logintime)
    res.json(req.session.logintime);
  else
    res.json("-1");
});
*/

// In this example,
// any path prefixed with "/restricted" is considered "restricted"
// and should only be accessible to users who have logged in.
// auth.checkLoginCB is a middleware that will forward the request
// to the next middleware if a user has logged in.
app.use('/restricted', auth.checkLoginCB, express.static('restricted'));


// If the URL does not match anything, look for a file with
// the matching path name in the "public" folder
app.use(express.static('public'));

app.listen(8081);
