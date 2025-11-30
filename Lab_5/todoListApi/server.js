const express = require('express'),   
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./API/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://trannghi16:trannghi16@fgwweb2.3n4jwkf.mongodb.net/?appName=FGWWeb2');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./API/routes/todoListRoutes'); //importing routes
routes(app); //register the route

app.listen(port);

console.log('Todo List RESTful API server started on: ' + port);