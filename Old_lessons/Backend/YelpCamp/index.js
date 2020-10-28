var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
  {
    name: "Salmon Creek",
    image:
      "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Granite Hill",
    image:
      "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Mountain Goat",
    image:
      "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Granite Hill",
    image:
      "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Mountain Goat",
    image:
      "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Granite Hill",
    image:
      "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Mountain Goat",
    image:
      "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Granite Hill",
    image:
      "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    name: "Mountain Goat",
    image:
      "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.post("/campgrounds", (req, res) => {
  let name = req.body.name;
  let image = req.body.image;
  campgrounds.push({ name: name, image: image });
  res.redirect("/campgrounds");
});

app.listen(3000, () => {
  console.log("YelpCamp has started on 3000!!");
});
