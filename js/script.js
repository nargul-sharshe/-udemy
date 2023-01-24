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

const numberOfFilms = + prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

// 2)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3)

    const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколко оцените его?", ""),
            c = prompt("Один из последних просмотренных фильмов?", ""),
            d = prompt("Один из последних просмотренных фильмов?", "");


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);



