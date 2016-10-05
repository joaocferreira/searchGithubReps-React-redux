var express = require('express');
var  path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'app/public'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res, next) {
	console.log(' --- ');
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(function(req, res, next) {
  console.log('404')
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});


/**
 * Start Server
 */

var port = 8080;
app.listen(port);

console.log('Server started at: ' + port);