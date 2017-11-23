let express = require('express');
let app = express();

function customCompare(a, b) {
  if (a % 2 == b % 2)
    return a-b;

  if (a % 2 == 0 && b % 2 != 0)
    return 1;

  if (a % 2 != 0 && b % 2 == 0)
    return -1;
}

// This function must be called on the server side to
// sort the integers in A[] into a specific order.
function customSort(A) {
  if (undefined === window)
    A.sort(customCompare); 
}

// Insert a routing rule here to handle the Ajax request
// and return the sorted result 







app.get('/', function(req, res) {
  res.redirect('/p3.html');
})

app.get('/p3.html', function(req, res) {
  res.sendFile(__dirname + '/p3.html');
})


app.listen(8081);
