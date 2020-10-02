var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

//Routes: 
//GET
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
         var hbsObject = {
             burgers: data
         };
         console.log(hbsObject);
         res.render("index", hbsObject);
    });
});

//POST
router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  
    burger.insertOne(req.body.name, function(result) {
    res.json(result);
    });
});

//PUT
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.updateOne({
    devoured: req.body.devoured
    }, condition, function(result) {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;
