var express = require('express');
var app = express();


var showdown = require('showdown');
var bodyParser = require('body-parser');

/* use ejs as the view engine */
app.set('view engine', 'ejs');

/* store assets */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* routes for app */
app.get('/', function(request, response) {
  response.render('pad');
});
app.post('/service',(req, res)=>{

  var content = req.body.content;
  converter = new showdown.Converter();
  var finalCont = converter.makeHtml(content);
  res.send(finalCont);
});

/* port 8000 or port used for heroku */
var port = process.env.PORT || 3000;
app.listen(port);
