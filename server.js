var express = require('express');
var app = express();

var showdown = require('showdown');
/* use ejs as the view engine */
app.set('view engine', 'ejs');

/* store assets */
app.use(express.static(__dirname + '/public'));

/* routes for app */
app.get('/', function(request, response) {
  response.render('pad');
});

/* port 8000 or port used for heroku */
var port = process.env.PORT || 3000;
app.listen(port);
