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

// написать ф-цию которая принимает последовательность цифр и возвращает новую последовательность
//  в которой сначала идут все отрицательные числа, а потом все положительные (порядок не важен)
// для последовательности
// 0 3 2 -5 1 -6 14 9 -1
// результат
// -5 -6 -1 0 3 2 1 14 9

// function pus(arr) {
//   const newArray = [];
//   const newArray2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArray.push(arr[i]);
//     } else {
//       newArray2.push(arr[i]);
//     }
//   }
//   let x = newArray.concat(newArray2);
//   return x;
// }
// const array = [0, 3, 2, -5, 1, -6];

// console.log(pus(array));

// function pus(arr) {
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       y++;
//     }
//   }
//   const newArray = new Array(arr.length);
//   let x = 0;
//   let b = arr.length - 1 - y;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArray[x] = arr[i];
//       x++;
//     } else {
//       newArray[b] = arr[i];
//       b++;
//     }
//   }
//   return newArray;
// }
// const array = [0, 3, 2, -5, 7, -6, 8, 4, -3, -4];

// console.log(pus(array));
// function pus(arr) {
//   const newArray = new Array();

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       newArray.push(arr[i]);
//     }
//     if (arr[i] < 0) {
//       newArray.unshift(arr[i]);
//     }
//   }
//   return newArray;
// }
// const array = [0, 3, 2, -5, 7, -6, 8, 4, -3, -4];

// console.log(pus(array));
// function haesa(p) {
//   const ol = 0;
//   while (p) {
//     if (p % 2 === 0) {
//       ol = p / 2;
//       p++;
//     } else {
//       p = p * 3 + 1;
//       p++;
//     }
//   }
// }
// const number = 10;
// console.log(haesa(number));
