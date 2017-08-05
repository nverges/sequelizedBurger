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

    // // Get route for retrieving a single post
    // app.get("/burgers/:id", function(req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Author
    //     db.Burger.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.Burger]
    //     }).then(function(dbBurger) {
    //         res.json(dbBurger);
    //     });
    // });

    // // POST route for saving a new post
    // app.post("/burgers/create", function(req, res) {
    //     db.Burger.create(req.body).then(function(dbBurger) {
    //         res.redirect('/');
    //     });
    // });


    // // PUT route for updating posts
    // app.put("/api/Burger", function(req, res) {
    //     db.Burger.update(
    //         req.body, {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function(dbBurger) {
    //         res.json(dbBurger);
    //     });
    // });


    app.post("/burgers/create", function(req, res) {

        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(data) {
            res.redirect("/")
        });
    });

    //updateOne
    app.put("/burgers/:id", function(req, res) {
        // var condition = "id = " + req.params.id;

        db.Burger.update({
            // burger_name: req.body.burger_name,
            // devoured: req.body.devoured
            devoured: true
        }, {
            where: {
                id: req.body.burgerId
            }
        }).then(function(data) {
            res.redirect("/")
        });
    });

    // DELETE route for deleting posts
    app.delete("/burgers/delete/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });








};