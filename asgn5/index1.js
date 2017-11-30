let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/simpleget', function(req, res) {
  let foo = req.cookies['foo'];
  if (foo)
    res.json({ "cookie-foo": foo });
  else
    res.json("Cookie 'foo' not found");
});

app.use(function(req, res) {
  res.cookie('foo', Date.now() +"", { maxAge: 600000 });
  res.sendFile(__dirname + '/' + 'index.html');
});

app.listen(8081);
