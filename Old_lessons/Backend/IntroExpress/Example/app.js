var express = require("express"),
    app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal;
    res.send("The " + animal.toUpperCase() + " says " + animal.toUpperCase());
});

app.get("/repeat/:word/:repNum", function (req, res) {
    var word, repNum;
    [word, repNum] = Object.values(req.params);
    console.log(word, repNum);
    var respond = "";
    for (let i = 0; i < repNum; i++) {
        respond += word + " ";
    }
    res.send(respond);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are u doing man?");
});

app.listen(3000, function () {
    console.log("Server runs on 3000");
});