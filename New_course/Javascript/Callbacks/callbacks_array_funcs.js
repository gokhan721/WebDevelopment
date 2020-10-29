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