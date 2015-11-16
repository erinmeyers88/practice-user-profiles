var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = require("cors");
var port = 3000;
var config = require("./config.js");
var profileCtrl = require("./controllers/profileCtrl.js");
var userCtrl = require("./controllers/userCtrl.js");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());


var corsOptions = {
    origin: 'http://localhost:' + port
};


app.use(cors(corsOptions));

app.use(session({ secret: config.sessionSecret }));



app.post("/api/login", userCtrl.login);

app.get("/api/profiles", profileCtrl.getFriends);


app.listen(port, function () {
	console.log("Listening on port " + port);
});