const LOGIN_TIME = 1 * 60 * 1000;  // 1 mintue login period

// Place holder for authentication rule
function authenticate(username, password) {
  return (username === 'john' && password === '123');
}

function loginCB(req, res) {
  if (authenticate(req.body.uname, req.body.pword) === true) {
    req.session.regenerate(()=>{});     // Recreate the session
    req.session.user = req.body.uname;  // To represent successful login
    var hour = 3600000
    var login_time = Date(Date.now() + hour)
    req.session.cookie.expires = login_time
    req.session.cookie.maxAge = hour

    res.send('Success. Return to <a href="/login">login</a> page.');
  }
  else {
    req.session.destroy(()=>{});
    res.status(401);
    res.send("Unauthorized. Please <a href='/login'>login</a> first.</a>");
  }
}

function logoutCB(req, res) {
  req.session.destroy(()=>{});
  res.send("Logout successfully");
}

// Return true only if the current user has logged in
function checkLogin(req) {
  return (req.session.user !== undefined);
}

// Middleware to ensure a user has logged in
function checkLoginCB(req, res, next) {
  // If the user has not yet logged in, redirect the user to login page
  if (! checkLogin(req)) {
    res.status(401);
    res.send("Unauthorized. Please <a href='/login'>login</a> first.</a>");
    return;
  }

  next(); // Forward the request to next middleware
}

module.exports = {
  loginCB: loginCB,
  logoutCB: logoutCB,
  checkLogin: checkLogin,
  checkLoginCB: checkLoginCB
};
