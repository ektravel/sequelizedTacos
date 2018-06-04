//Initial starting point for the Node/Express server
//Dependencies
var express = require ("express");
var bodyParser = require ("body-parser");

//Models
var db = require("./models");

//Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
// Import routes and give the server access to them.

require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
  });
});
  