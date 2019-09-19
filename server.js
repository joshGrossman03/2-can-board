/* eslint-disable no-console */
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Requiring our models for syncing
var db = require("./models");

//var path = require('path');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
var serveStatic = require("serve-static");
app.use(serveStatic(__dirname + "/dist"));
app.get(/.*/,function (req, res){
  res.sendfile(__dirname + "/dist/index.html");
});
// Routes
// =============================================================
require("./src/routes/api-routes.js")(app);
require("./src/routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
