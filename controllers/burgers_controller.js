const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {

//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

router.get("/", function(req,res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req,res) {

    burger.all(function(data) {
      // var hbsObject = {
      //   burger_data: data
      // };
      // console.log(hbsObject);
      res.render("index", {burger_data : data });
    });

});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
  	console.log(result);

  });
   res.redirect("/");
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);

  });
   res.redirect("/");
});

// router.put("/burgers/:id", function(req, res) {

//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: true
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;
