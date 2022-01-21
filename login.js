var mysql = require("mysql");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sahil@1234",
  database: "login",
});

var app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/login.html"));
});

app.post("/auth", function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  console.log(request.body);
  if (username && password) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        console.log(results);
        console.log(error);
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          response.send({
            message: Array.from(Array(10), () =>
              Math.floor(Math.random() * 36).toString(36)
            ).join(""),
          });
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.get("/home", function (request, response) {
  if (request.session.loggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
