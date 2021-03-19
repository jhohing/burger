var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Uses the public directory to display static content
app.use(express.static("public"));

//parse body as JSON
app.use(express.urlencoded({ extended :  true}));
app.use(express.json());
app.use("/public", express.static("./public"));


// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import appi routes from the controller file
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


