function Movie(title, rating, hasWatched) {
    [this.title, this.rating, this.hasWatched] = [title, rating, hasWatched];
}

movies = [
    new Movie("bambam", "3 starts", "yes"),
    new Movie("MAx Fury", "3.5 stars", "no")
]

$(function () {
    console.log(movies);
});