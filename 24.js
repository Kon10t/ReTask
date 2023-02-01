/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
`Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)`*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: 11,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: () => {
        if (personalMovieDB.privat != true) {
            console.log('false');
            console.log(personalMovieDB);
        } else {
            console.log('true');
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            if (favoriteGenres != null && favoriteGenres != '') {
                personalMovieDB.genres[i] = favoriteGenres;
                console.log('yeap');
            } else {
                console.log('les`go back');
                i--;
            }
        }
    },
    toggleVisibleMyDB() {
        if (this.privat != true) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.genres.forEach((item, i) => console.log(`Любимый жанр ${i+1} - это ${item}`));

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

    // function showMyDB () {
    //     if (personalMovieDB.privat != true) {
    //         console.log('false');
    //         console.log(personalMovieDB);
    //     } else {
    //         console.log('true');
    //     }
    // }
    // showMyDB();
    
    // function writeYourGenres() {
    //     for (let i = 0; i <= 2; i++) {
    //         var favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    //         personalMovieDB.genres.unshift(favoriteGenres);
    //     }
    // }

    // writeYourGenres();