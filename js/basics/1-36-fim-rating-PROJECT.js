'use strict';
'use strict';

// Код возьмите из предыдущего домашнего

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    //Methods
    start: () => {
        personalMovieDB.count = +prompt(
            'How many films have you already seen?',
            ''
        );

        while (
            personalMovieDB.count == '' ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                'How many films have you already seen?',
                ''
            );
        }
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const movie = prompt(
                "What was the last movie that you've watched?",
                ''
            );
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
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("You've seen not that much movies, huh?");
        } else if (10 <= personalMovieDB.count < 30) {
            console.log("You're a fan! ");
        } else if (personalMovieDB.count >= 30) {
            console.log("You're a maniac!");
        } else {
            console.log('Something went wrong');
        }
    },

    showMyDB: (hidden) => {
        if (!hidden) {
            return console.log(hidden);
        }
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            // When used First version "i <= 3" should be used.

            //First Version

            // let genre = prompt(`What is your favorit genre number ${i} `);

            // if (
            //     genres === '' ||
            //     genres === null
            // ) {
            //     console.log(
            //         `You've entered invalid data, or have forgotten to enter them.`
            //     );
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            //Second Version

            let genres = prompt(
                `Enter your favorite generes separated by coma. `
            ).toLocaleLowerCase();

            if (genres === '' || genres == null) {
                console.log(
                    `You've entered invalid data, or have forgotten to enter them.`
                );
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre #${i + 1} - is ${item}`);
        });
    },
};
