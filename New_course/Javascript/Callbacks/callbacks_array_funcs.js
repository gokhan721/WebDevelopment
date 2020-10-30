const numbers = [1, 2, 3, 4, 5, 6];

const movies = [
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Aliens",
        score: 90
    },
    {
        title: "Real Steel",
        score: 92
    }
];


numbers.forEach(function (el) {
    console.log(el);
});

movies.forEach(function (movie) {
    console.log(`${movie.title}-${movie.score}/100`);
});


const squareNums = numbers.map(function (num) {
    return num ** 2;
});

console.log(squareNums);

const square = x => {
    return x ** 2;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const rollDieİmplicit = () => (
    Math.floor(Math.random() * 6) + 1
);


const moviesArrowMap = movies.map(movie => `${movie.title} - ${movie.score / 10}`);


const filteredArr = numbers.filter(n => n > 4);

console.log(`filteredArr: ${filteredArr}`);

const filteredMoviesTitle = movies
    .filter(movie => movie.score > 80)
    .map(movie => movie.title)

console.log(`Filtered movie titles: ${filteredMoviesTitle}`);

console.log(`Every Func: ${numbers.every(number => number <= 5)}`);

console.log(`Some Func: ${numbers.some(number => number > 5)}`);

console.log(`Reduce with initial zero: ${numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 0)}`);

const maxValue = numbers.reduce((price, max) => {
    if (price > max) {
        return price;
    }
    return max;
});

const highestRatedMovie = movies.reduce((bestMovie, currMovie) => {
    return (bestMovie.score > currMovie.score ? bestMovie : currMovie);
});

// Arrow function with this

const person = {
    firstName: 'Viggo',
    lastName: 'Bambam',
    fullName: () => {
        // https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/#:~:text=While%20in%20ES5%20'this'%20referred,method%20or%20the%20object%20itself.!!!
        console.log(`fullName: ${this}`); // this refers to window object in ES5 due to execution scope!!!
        return this.firstName + this.lastName;
    },
    shoutName: function () {
        // setTimeout is a function of window object. So, this refers to window!!!
        setTimeout(() => {
            console.log(`shoutName: ${this}`);
            console.log(`${this.fullName()}`);
        }, 3000);
    }
}

// SetTimeout(call callback function after specified time) and SetInterval(repetitive. Don't forget clear!!!)
setTimeout(() => {
    clearInterval(id);
}, 7000);

const id = setInterval(() => {
    console.log("Interval...");
}, 2000);

// Newer JS  features

// Default Params

function rollDieDefault(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// Spread Function (...value)

const spread_arr = [13, 4, 6, 7, 545, 8, 4];

console.log(`Max el of spread_arr: ${Math.max(...spread_arr)}`);

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const animal = [...cats, ...dogs];
console.log(`Spreaded animal: ${animal}`);

console.log(`Spreaded string hello: ${[..."hello"]}`);

// Spread Objects properties

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine } // order matters!!! Last object get common key!!!

console.log(`catDog feline->canine: ${JSON.stringify(catDog)}`);
console.log(`catDog canine -> feline: ${JSON.stringify({ ...canine, ...feline })}`);

// REST Store all parameters in an array

function sum(...values) {
    return values.reduce((a, b) => a + b);
}

// Destructuring (A short clean syntax for unpacking)

const [first, second, ...reminders] = numbers;
console.log(`first num: ${first} `);
console.log(`second num: ${second} `);
console.log(`reminders num: ${reminders} `);

const { title, score } = movies[0];
console.log(`Title: ${title}`);
console.log(`Score: ${score}`);

// Rename key value
const { score: like } = movies[1];
console.log(`Score is changed to like: ${like}`);

// Pull out and assign default value
const { director = 'Steven Spielberg' } = movies[0];
console.log(`Director Movie: ${director}`);

const user = {
    first: "Bambam",
    last: "Cakil",
    address: "blablabla"
}


function fullName({ first, last }) {
    return `${first} ${last}`;
}

console.log(movies.filter(({ score }) => score > 90));