//Similar to routes, this file offers a set of routes for displaying and saving data to the db.

//Dependencies.

//Require the Taco model.
var db = require("../models");

//Routes
module.exports = function(app) { 

app.get("/", function(req, res){
    db.Taco.findAll({}).then(function (result) {
        //res.json(result);
        var hbsObject = {
            tacos: result
        };
        res.render("index", hbsObject);
    }).catch(function (err) {
        console.log(err);
    });
});

//GET route for getting all of the tacos.
app.get("/api/tacos", function (req, res) {
    db.Taco.findAll({}).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
});

//POST route for saving a new taco.
app.post("/api/tacos", function (req, res) {
    console.log(req.body);
    db.Taco.create({
        taco_name: req.body.taco_name,
        devoured: req.body.devoured
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
});

//PUT route for updating tacos.
app.put("/api/tacos/:id", function (req, res) {
    db.Taco.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
});

//DELETE route for deleting tacos. 
app.delete("/api/tacos/:id", function (req, res) {
    db.Taco.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
});
};