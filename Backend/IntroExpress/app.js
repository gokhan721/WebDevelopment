var express = require("express");
var app = express();

// Be careful about route order


// req => object that contains all info about the info trigger route request
// res => contains all info about responding
app.get("/", function (req, res) {
    res.send("Hi There");
});

app.get("/bye", function (req, res) {
    res.send("Goodbyeeeee");
});

app.get("/cat", function (req, res) {
    res.send("MEOW!");
});


// Route parameters (pattern match)
app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit);
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    console.log(req.params);
    res.send("Welcome to comments page");
})

app.listen(3000, function () {
    console.log("Server runs on port 3000");
});
