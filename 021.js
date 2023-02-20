"use strict"
// Массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];

// arr.pop();  //Удаляет последний элемент в массиве 
// arr.push(10); //Добовляет элемент в конец массива

// console.log(arr);

// // ------Перебор массива, используем цикл------
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);
// }

// ------Метод For Each для перебора массива- применяет call back функцию----

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })


// -------Метод Split------
    const str = prompt("", "");
    const products = str.split(", ");
    console.log(products); 

// получаем из введенных данных массив 

// console.log(products.join('; '));

// склеиваем полученный массив обратно в строку 

// products.sort();

// сортирует данные в массиве как строки

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// используя функцию callback, сортирует числовые элементы в массиве

 