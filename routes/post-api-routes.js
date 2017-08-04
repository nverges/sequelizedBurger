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
    app.get("/api/Burger/", function(req, res) {
        var query = {};
        if (req.query.burger_name) {
            query.burger_name = req.query.burger_name;
        }


        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Burger.findAll({
            where: query,
            include: [db.Burger]
        }).then(function(dbBurger) {
            res.json(db.Burger);
            console.log(`BURGER NAME: ${dbBurger}`);
        });
    });

    // Get rotue for retrieving a single post
    app.get("/api/Burger/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Burger.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Burger]
        }).then(function(dbAuthor) {
            res.json(dbPost);
        });
    });

    // POST route for saving a new post
    app.post("/burgers/create", function(req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/Burger/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
    });

    // PUT route for updating posts
    app.put("/api/Burger", function(req, res) {
        db.Burger.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
    });
};