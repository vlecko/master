//  сортировка в обратном порядке
// let p =[1,4,7,10,1,-11];
// p.sort((a,b) => b-a);
// console.log(p)

// скапировать и отсортировать массив

// function copySorted(arr) {
//     return arr.slice().sort();
//   }

//   let arr = ["HTML", "JavaScript", "CSS"];

//   let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

//  console.log( names );

// Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName );

// Отсортировать пользователей по возрасту

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
//   }

//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 28 };

//   let arr = [ vasya, petya, masha ];

//   sortByAge(arr);

//   console.log(arr[0].age);
//   console.log(arr[1].age);
//   console.log(arr[2].age);

// Перемешайте массив
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

//   let arr = [1, 2, 3];
//   shuffle(arr);
//   console.log(arr);

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

//   // подсчёт вероятности для всех возможных вариантов
//   let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };

//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }

//   // показать количество всех возможных вариантов
//   for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
//   }

// Получить средний возраст

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

//   let arr = [ vasya, petya, masha ];

//   console.log( getAverageAge(arr) );

// Оставить уникальные элементы массива

// function unique(arr) {
//     let result = [];

//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }

//     return result;
//   }

//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];

//   console.log( unique(strings) );

// function randomInteger(min, max) {
//    let rand = min + Math.random() * (max  - min );
//     return  Math.floor(rand);
//          }
// //   console.log( randomInteger(3, 10) );

//   function getArenet(length, maxvalue) {
//       const newArray = new Array (length);

//       for (let index = 0; index < length; index++) {
//         newArray [index] = randomInteger(-maxvalue,maxvalue)

//       }
//       return newArray ;
//   }
//   console.log(getArenet(2,100))

//   1) написать вторую функцию генератор, что бы она создавала числа в диапозоне от -max до max (было от 0 до max)

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max - min);
//   return Math.floor(rand);
// }
//  //   console.log( randomInteger(3, 10) );

//    function getArenet(length, maxvalue) {
//        const newArray = new Array (length);

//        for (let index = 0; index < length; index++) {
//          newArray [index] = randomInteger(-maxvalue,maxvalue)

//        }
//        return newArray ;
//    }
//    console.log(getArenet(5,5))

// // 2) сгенерировать последовательность из 10 чисел от 0 до 20. Найти среднее арифметическое этих чисел (разделить сумму всех чисел на их колличество)
// const arrayTen = genArray(10, 20);

// function genArray(length, maxvalue) {
//   const newArray = new Array(length);

//   for (let index = 0; index < length; index++) {
//     newArray[index] = randomInteger(0, maxvalue);
//   }

//   return newArray;
// }
// console.log(arrayTen);

// function number(arr) {
//   let sum = 0;
//   let sum2 = 0;
//   for (const x of arr) {
//     sum = sum + x;
//     sum2 = sum / x;
//   }
//   return Math.floor(sum2);
// }

// console.log(number(arrayTen));

// сгенерировать последовательность из 2000 элементов от -100 до 100, найти среднее арифметическое для них

// const arrayTen = genArray(2000, 100);

// function genArray(length, maxvalue) {
//   const newArray = new Array(length);

//   for (let index = 0; index < length; index++) {
//     newArray[index] = randomInteger(-maxvalue, maxvalue);
//   }

//   return newArray;
// }

// function number(arr) {
//   let sum = 0;
//   let sum2 = 0;
//   for (const x of arr) {
//     sum = sum + x;
//   }
//   sum2 = sum / arr.length;
//   return Math.floor(sum2);
// }

// console.log(number(arrayTen));

// написать функцию замены каждого элемента массива с нечетным индексом на ноль
// function number(arr) {
//   const newArray = new Array(...arr);

//   for (let i = 0; i < newArray.length; i++) {
//     if (i % 2 !== 0) {
//       newArray[i] = 0;
//     }
//   }
//   return newArray;
// }
// const array = [2, 4, 3, 5, 7];
// console.log(number(array));
// console.log("array", array);

// 5) Создать второй массив из четных элементов первого массива
// function pus(arr) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// const array = [2, 3, 4, 6];

// console.log(pus(array));

// const x = [];

// x.push(2, 4);
// x.push("3");
// console.log(x);

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     i;
//   }
// }

// В последовательности символов вывести на печать TRUE, если количество гласных букв больше, чем согласных и FALSE – иначе.
// const s = "Helloo";
// function vowelsRed(p) {
//   const g = "aeioyu";
//   let glas = 0;
//   let soglas = 0;

//   for (let i = 0; i < p.length; i++) {
//     if (g.includes(p[i])) {
//       glas = glas + 1;
//     } else {
//       soglas = soglas + 1;
//     }
//   }
//   const f = glas > soglas;
//   return f;
// }

// console.log(vowelsRed(s));
// В последовательности символов подсчитать количество букв и количество цифр.
// const s = "Hellodffrokgweckwefo11";
// function vowelsRed(p) {
//   const num = "0,1,2,3,4,5,6,7,8,9";
//   let letters = 0;
//   let number = 0;

//   for (let i = 0; i < p.length; i++) {
//     if (num.includes(p[i])) {
//       number = number + 1;
//     } else {
//       letters = letters + 1;
//     }
//   }

//   return [number, letters];
// }

// console.log(vowelsRed(s));
