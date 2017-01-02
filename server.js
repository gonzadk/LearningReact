var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
})

var port = process.env.port || 3030;

app.listen(port, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Server listening on port ' + port);
})