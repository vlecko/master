// В последовательности целых положительных чисел опреде- лить максимальное четное число и его порядковый номер.
// function number(arr) {
// let max = -1;
//     let maxIndex = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 ===0)
//         if (element>max) {
//         max = element;
//         maxIndex = index;

//         }

//     }
//     const d =[max,maxIndex]
//     return d;

// }
// const array=[2,4,6,8,9,-11]
// console.log(number(array));

// В последовательности целых чисел определить сумму по- ложительных четных чисел.
// function number(arr) {
//     let sum = 0;
//     for (const x of arr) {
//         if(x % 2 ===0)
//         if (x>0) {
//       sum = sum+x;

//         }
//     }
//     return sum;
// }
// const array=[2,4,6,8,2,9,-11]
// console.log(number(array))

// В последовательности чисел определить предпоследнее отрицательное число.

// function number(arr) {
//     let negativs = []
//     for (const x of arr) {
//         if (x<0) {
//         negativs.push(x)
//         }

//     }
//     const index =  negativs.length

//     return  negativs [index -2] ;
// }
// const array=[2,-4,-6,-8,2,9]
// console.log(number(array));

// В последовательности вещественных чисел подсчитать произведение чисел, кратных 3.

// function number(arr) { задаем функцию
//     let sum = 1; создаем переменную
//     for (const x of arr) { проходим по всему массиву
//         if(x % 3 ===0)  проверяем делиться ли оно
//         if (x>0) { затем смотрим больше ли оно  0
//       sum = sum * x;     и умнажаем на * каждое

//         }
//     }
//     return sum;     и возращаем значение
// }
// const array=[2,4,6,8,2,9] задаем константу
// console.log(number(array));  вызываем функцию ивыводим в консоль

// В последовательности целых положительных чисел опреде- лить максимальное четное число и его порядковый номер.

// function number(arr) {
// let max = -1;
//     let maxIndex = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 ===0)
//         if (element>max) {
//         max = element;
//         maxIndex = index;

//         }

//     }
//     const d =[max,maxIndex]
//     return d;

// }
// const array=[2,4,6,8,9,-11]
// console.log(number(array));

// function number(arr) {
//     let sum = 0;
//     for (let x= 0; x< arr.length; x++) {
//         if(x % 2 ===0)
//         if (x>0) {
//         sum = sum+x;
//         }
//     }
//     return sum;
// }
// const array=[2,4,6,8,2,9,-11]
// console.log(number(array));

// В последовательности целых чисел определить сумму по- ложительных четных чисел.

// function number(arr) {
//     let sum = 0;
//     for (const x of arr) {
//         if(x % 2 ===0)
//         if (x>0) {
//       sum = x;

//         }
//     }
//     return sum;
// }
// const array=[2,4,6,8,2,9,-11]
// console.log(number(array));

// / function number(arr) {
//     let even = 0;
//     let unclean =1;
//     for (const x of arr) {
//         if (x>0) {
//          even = even+x;
//         } if (x<0) {
//             unclean = unclean * x;
//         }
//     }if (unclean<even) {
//         return even;
//     } else {
//         return unclean;
//     }
// }
// const array=[2,9,-2,-13]
// console.log(number(array));
