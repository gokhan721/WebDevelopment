const express = require("express");
const app = express();
const rp = require("request-promise");
const beautify = require("json-beautify");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  const search = req.query.search;
  rp(`http://www.omdbapi.com/?s=${search}&apikey=thewdb`)
    .then((bodyString) => {
      const bodyJson = JSON.parse(bodyString);
      res.render("results", { data: bodyJson });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
});

app.listen(3000, () => {
  console.log("Movie has started!!!");
});
