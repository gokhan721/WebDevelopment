const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.end("Home Page");
})

app.get("/cats", (req, res) => {
    res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
    res.send("WOOF");
})

app.post("/cats", (req, res) => {
    res.send("POST REQUEST CATS");
});

app.get("/r/:subreddit", (req, res) => {
    const subreddit = req.params.subreddit;
    res.send(`THIS IS A SUBREDDIT OF ${subreddit.toUpperCase()}`);
})

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`THIS IS A SUBREDDIT OF ${subreddit.toUpperCase()} IN ${postId.toUpperCase()}`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOT FOUND SEARCH PARAM!!!");
    } else {
        res.send(`SEARCH ${q}`);
    }
})

app.get("*", (req, res) => {
    res.send(`WE GET A NEW REQUEST FROM ${req._parsedUrl.pathname}!!`);
});


app.listen(8080, () => {
    console.log("Server runs on 8080");
});