// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/", function(req, res) {

        db.Burger.findAll({}).then(function(data) {
            var hbsObject = {
                Burger: data
                    // Burger: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    // GET api info. Displays all burgers in database in JSON format
    app.get('/api', function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // POST route for creating a new burger
    app.post("/api/burgers", function(req, res) {

        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(data) {
            res.redirect("/");
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

};