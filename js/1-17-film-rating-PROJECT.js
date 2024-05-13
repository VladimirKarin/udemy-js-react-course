/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('How many films have you already seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const movie = prompt("What was the last movie that you've watched?", '');
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

if (personalMovieDB.count < 10) {
    console.log("You've seen not that much movies, huh?");
} else if (10 <= personalMovieDB.count < 30) {
    console.log("You're a fan! ");
} else if (personalMovieDB.count >= 30) {
    console.log("You're a maniac!");
} else {
    console.log('Something went wrong');
}

console.log(personalMovieDB);
