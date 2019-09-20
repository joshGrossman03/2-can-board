/* eslint-disable no-console */
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/todos/", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // Get route for returning todos of a specific category
  app.get("/api/todos/category/:category", function(req, res) {
    db.Todo.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // Get route for retrieving todo items by Status
  app.get("/api/todos/:status", function(req, res) {
    db.Todo.findAll({
      where: {
        status: req.params.status
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // Todo route for saving a new todo to the db
  app.post("/api/todos", function(req, res) {
    console.log(req.body);

    db.Todo.create({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      status: req.body.status
    }).then(function(dbTodo) {
      res.json(dbTodo);
      console.log(res.json(dbTodo));
    });
  });

  // DELETE route for deleting a single task
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting all done tasks
  app.delete("/api/todos", function(req, res) {
    let cardIds = req.body.map(card => card.id);
    db.Todo.destroy({
      where: {
        id: cardIds
      }
    }).then(function() {
      db.Todo.findAll({}).then(function(dbTodo) {
        res.json(dbTodo);
      });
    });
  });
  // PUT route for updating todos
  app.put("/api/todos", function(req, res) {
    db.Todo.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};
