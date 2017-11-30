let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');

app.use(cookieParser());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/simpleget', function(req, res) {
  let foo = req.cookies['foo'];
  if (foo)
    res.json({ "cookie-foo": foo });
  else
    res.json("Cookie 'foo' not found");
});

app.listen(8083);
