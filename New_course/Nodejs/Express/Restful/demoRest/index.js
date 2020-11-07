const express = require("express");
const app = express();

// for x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// for json
app.use(express.json());

app.get("/tacos", (req, res) => {
    res.send("GET TACOS");
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${meat} and ${qty} tacos`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})