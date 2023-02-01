/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    // for (let i = 0; i < 2; i++) {
    //     const lastSeenFilm = prompt('Один из последних посмотренных фильмов', ''),
    //           rateFilm = +prompt('На сколько оцените его', '');

    //     if (lastSeenFilm != null && rateFilm != null && lastSeenFilm != '' && rateFilm != '' && lastSeenFilm.length < 50 ) {
    //         personalMovieDB.movies[lastSeenFilm] = rateFilm;
    //         console.log('done');
    //     } else { 
    //         console.log('error');i--;
    //     }
    // }

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }

    function showMyDB () {
        if (personalMovieDB.privat != true) {
            console.log('false');
            console.log(personalMovieDB);
        } else {
            console.log('true');
        }
    }
    showMyDB();
    
    function writeYourGenres() {
        for (let i = 0; i <= 2; i++) {
            var favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            personalMovieDB.genres.unshift(favoriteGenres);
        }
    }

    writeYourGenres()