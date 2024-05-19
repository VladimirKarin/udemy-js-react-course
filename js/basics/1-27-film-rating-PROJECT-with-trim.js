'use strict';
//trim() - removes spacese in the beggining and in the end of the string.

'use strict';

// Код возьмите из предыдущего домашнего

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let numberOfFilms = 0;

function start() {
    numberOfFilms = +prompt('How many films have you already seen?', '');

    while (
        numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt('How many films have you already seen?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt(
            "What was the last movie that you've watched?",
            ''
        ).trim();
        const movieRating = +prompt('How would you rate that move?', '');

        if (
            movie != null &&
            movieRating != null &&
            movie != '' &&
            movieRating != '' &&
            movie.length < 50
        ) {
            personalMovieDB.movies[movie] = movieRating;
            console.log('done.');
        } else {
            console.log('error!');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You've seen not that much movies, huh?");
    } else if (10 <= personalMovieDB.count < 30) {
        console.log("You're a fan! ");
    } else if (personalMovieDB.count >= 30) {
        console.log("You're a maniac!");
    } else {
        console.log('Something went wrong');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        return console.log(hidden);
    }
}

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(
            `What is your favorit genre number ${i + 1} `
        );
    }
}

start();

rememberMyFilms();

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

writeYourGenres();
