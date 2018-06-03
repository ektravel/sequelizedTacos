var express = require("express");

//Import the model (tacos.js) to use its database functions.
var taco = require ("../models/taco.js");

//Create the route for the app.
var router = express.Router();

//Set up logic within the routes where required.
router.get("/", function(req, res){
    taco.selectAll(function(data){
        var hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tacos", function(req, res){
    taco.insertOne(["taco_name", "devoured"], [req.body.taco_name, req.body.devoured], function(result){
        //send back the ID of the new entry
        res.json({id: result.insertId});
    });
});

router.put("/api/tacos/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition ", condition);

    taco.updateOne(
        {
            devoured: req.body.devoured 
        },
        condition, function(result) {
            if (result.changedRows === 0){
                //If no rows were changed, then the ID must not exist, display error code 404
                return res.status(404).end();
            }
            else
                res.status(200).end();
        }
    );
});

module.exports = router;