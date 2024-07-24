// Задание на урок ниже

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt("Последний посмотренный фильм?");
    let b = prompt('На сколько его оцените?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}


if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
    console.log("Просмотрено довольно мало фильмов");
} else if (10 >= personalMovieDB.count && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
    console.log("Вы классический зритель");
} else if (30 <= personalMovieDB.count) {
    alert("Вы киноман");
    console.log("Вы киноман");
} else {
    alert("Произошла ошибка");
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// ========= Задание 2 =========================================

/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - возвращаем пользователя к вопросам опять. 
(К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */