// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
//var db = require("./models")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./src/routes/api-routes");
//(app);
//db.sequelize.sync();
// Starting our Express app
// =============================================================


app.get('/status', (req, res)=>{
    res.send({
        message:'hello World'
    })
});

app.post('/register', (req, res)=>{
    res.send({
        message:'you are registered have fun!!'
    })
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });