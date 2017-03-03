console.log('the server is running');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js'); // not sure if this file path is correct
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public/views'));

app.use('/pets', routes);

app.listen(port);
