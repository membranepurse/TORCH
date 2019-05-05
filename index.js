var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');

const db = require("./db");

const mongoose = require('mongoose');

var todoRoutes = require("./routes/todos");

// const db = require('./config/keys').mongoURI;

//
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://:vikings1@cluster0-0h9la.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose
//   .connect(db)
//   .then(() => console.log('mongodb connected...'))
//   .catch(err => console.log(err));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

// app.listen(port, function(){
//     console.log(`server started on port ${port}`);
// })

db.connect((err)=>{
    // If err unable to connect to database
    // End application
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else{
        app.listen(3000,()=>{
            console.log('connected to database, app listening on port 3000');
        });
    }
});
