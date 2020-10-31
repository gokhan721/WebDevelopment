var franc = require("franc");
var langs = require("langs");


const word = process.argv[2]
const fword = franc(word);
const lang = langs.where("3", fword);

if (fword === "und") {
    console.log("We couldn't guess!!");
} else {
    console.log(lang.name);
}

res