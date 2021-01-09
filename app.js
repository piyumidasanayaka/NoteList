const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);



mongoose.connect('mongodb://localhost:27017/restapi',{ useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise=global.Promise;
    

//Start listening to the server
app.listen(process.env.port||3000,function(){
    console.log('Listen to the server');
  });