// AJAX
/**
 *  - Asynchronous js and xml
 * 
 */

// AJAJ
/*
    - Asynchronous js and json
*/

// Fetch API

/**
 * Promise based
 * Modern way of XMLHttpRequest(XHR)
 *
 */

const asyncFetch = async () => {
    try {
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

// AXIOS 
/**
 *
 * Library for making http requests
 *
 * Run on either Client side or backend side(node) 
 * 
 */

axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

const fetchAxios = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

const jokes = document.querySelector("#jokes");
const jokeButton = document.querySelector("#addJoke");

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "No jokes available!";
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("LI");
    newLi.append(jokeText);
    jokes.append(newLi);
}

jokeButton.addEventListener("click", addNewJoke);