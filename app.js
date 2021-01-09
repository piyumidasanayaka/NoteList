const express = require('express');
const app= express();
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);


//connect to DB
// const client = new MongoClient(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true  });
// try {
//     // Connect to the MongoDB cluster
//     client.connect();
//     console.log('connected to DB!');

//     // Make the appropriate DB calls
//     // await  listDatabases(client);

// } catch (e) {
//     console.error(e);
// } finally {
//    client.close();
// }

//const uri = "mongodb+srv://restapi:<password>@cluster0.6l6eh.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("restapi").collection("note");
//   console.log('connected to DB!');
//   // perform actions on the collection object
//   //client.close();
// });


mongoose.connect('mongodb://localhost:27017/restapi',{ useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise=global.Promise;
    

//Start listening to the server
app.listen(process.env.port||3000,function(){
    console.log('Listen to the server');
  });