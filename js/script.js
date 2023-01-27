"use strict"; 

//alert('Hello!'); //выводит на экран сообщение для пользователя


//const result = confirm('Are you here?');
//console.log(result); //выводит на экран вопрос ддля пользователя, на который можно ответить "да" или "нет"

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer);


// const answers = [];

// answer[0] = prompt("Как ваше имя?", "");
// answer[0] = prompt("Как ваша фамилия?", "");
// answer[0] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers));



// 24.01.2023
// 1)

// const numberOfFilms = + prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

//  2)

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// 3)

    // const a = prompt("Один из последних просмотренных фильмов?", ""),
    //       b = prompt("На сколко оцените его?", ""),
    //       c = prompt("Один из последних просмотренных фильмов?", ""),
    //       d = prompt("Один из последних просмотренных фильмов?", "");


    // personalMovieDB.movies[a] = b;
    // personalMovieDB.movies[c] = d;

    // console.log(personalMovieDB);

//  Условия

// if (4 == 9){
//     console.log('OK!');
// } else {
//     console.log ('Error');
// }




// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log ('Ok');
// }
  
// // Тернарный оператор

// (num === 50) ? console.log('Ok') : console.log('Error');


// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
// }

// Циклы

    // let num = 50;

    // while (num < 55) {
    //     console.log(num);
    //     num++;
    // }

    // do {
    //     console.log(num);
    //     num++;
    // }
    // while (num < 55);

    // for (let i = 1; i < 8; i++) {
    //     if (i === 6) {
    //         // break;
    //         continue;
    //     }
    //     console.log(i);
    // }

// Задача 2

// 1)


const numberOfFilms = + prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколко оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
}


    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

console.log(personalMovieDB);