var express = require("express"),
    app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/lovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Bambam" },
        { title: "Post 3", author: "Cakil" },
    ]
    res.render("posts", { posts: posts });
})

app.listen(3000, function () {
    console.log("Run on 3000");
});