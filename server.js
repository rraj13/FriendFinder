const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;

//middleware integration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const friends = require("./app/data/friends.js");

// //requiring html routes to set paths to either home or survey site
const htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

// //requiring api routes to allow user to view friends as well as enter personal information
const apiRoutes = require("./app/routing/apiRoutes.js")(app);


//starting server 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

