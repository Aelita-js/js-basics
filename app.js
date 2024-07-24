// Задание на урок ниже

'use strict';

let numberOfFilms;



function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();




// ===== Global DB Object ============
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};




function rememberMyFilms () {
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
}

// rememberMyFilms();




function detectPersonalLevel () {
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
}

// detectPersonalLevel();




// function showMyDB (property) {
//     if (property.privat) {
//         console.log(property);
//     }
// }
// showMyDB(personalMovieDB);

function showMyDB (property) {
    if (!property) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat)




function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if (genre == '' || genre == null) {
            i--;
        } else {
            personalMovieDB.genres[i-1] = genre;
        }

    }
    console.log(personalMovieDB);
}

writeYourGenres();



// ========= Задание 3 =========================================

/* 
1) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

2) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно 
*/