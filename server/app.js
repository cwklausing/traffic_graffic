var express = require("express");
var app = express();
var pg = require('pg');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

//for serving static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use('/traffic', traffic);
app.use('/', index);

//Set port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});