"use strict"
// Передача по ссылке 

// const obj {
//     a: 5,
//     b: 1
// };

// const copy = obj; //передача по ссылке 
// copy.a = 10;

// console.log(copy);
// console.log(obj);
// ---------------------------

// Создание поверхностной копии обьекта

// При помощи функцийи  и цикла создаем новую копию обьекта перебирая старый обьект 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// ----------------------------------

// Object assign - совмещение двух обьектов

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
// независимая поверхностная копия обьекта

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);
------------------------------

// Создание копии массива
// метод slice()

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ksdjfhsdkjhd'

console.log(oldArray);
console.log(newArray);

// ------------------------
// стандарт ES6 - ES9
// оператор разварота -Spread, разворачивает струкртуру массива на отдельные элементы


const video = ['youtube', 'rutube', 'vimeo'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// --------------------

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

