//Import ORM to create functions that will interact with the database. 
var orm = require ("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var taco = {
    selectAll: function(cb){
        orm.selectAll("tacos", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("tacos",cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("tacos", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = taco;
