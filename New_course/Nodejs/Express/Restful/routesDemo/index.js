const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const { v4: uuid } = require("uuid");


// for x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// for json
app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like basketball'
    },
    {
        id: uuid(),
        username: 'Bambam',
        comment: 'Plz delette your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlydog',
        comment: 'woof woof'
    },
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const { comment: newComment } = req.body;
    const existsComment = comments.find(c => c.id === id);
    existsComment.comment = newComment;
    res.redirect("/comments");
})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})