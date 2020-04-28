// function min(v1,v2){
//     if (v1<v2){
//      return v1;
//     }
//     else{
//      return v2;
//     }

// }
// const minmax = [123,457,344];
//     let max = arr [0];
//     if (arr [i]>let) {
//           let max = arr[i]
//     }

// const array = ['один','два','три']
//  for (let index = 0; index < array.length; index++) {
//      const element = array[index];

//      console.log (element);
//  }]
// let index = 1;
//     while (index < array.length) {
//         index = index +1;
//         console.log(array [index -1]);
//         // console.log(index);
//     };

// const array = {
//        '0': один,
//     //     '1': два,
//     //     '2': три,
//     //     length: 3,
//     //     }

// let vil =[[4,6],[5,7],[10,8],[11,13],[14,16]]
//         for (let index = 0; index < vil.length; index++) {
//             const element = vil[index];
//             const t1=element [0]
//             const t2 = element[1]
//             const min1= min (t1,t2)

//             console.log(min1)
//         }
// В последовательности чисел сравнить, что больше сум- ма положительных или произведение отрицательных.
// function number(arr) {
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

// В последовательности вещественных чисел подсчитать произведение чисел, кратных 3.
// function number(arr) { задаем функцию
//     let sum = 1; создаем переменную
//     for (const x of arr) { проходим по всему массиву
//         if(x % 3 ===0)  проверяем делиться ли оно
//         if (x>0) { затем смотрим больше ли оно  0
//       sum = sum * x;     и умнажаем на 1

//         }
//     }
//     return sum;     и возращаем значение
// }
// const array=[2,4,6,8,2,9] задаем константу
// console.log(number(array)); и выводим в консоль

// В последовательности чисел выдать на печать TRUE, если значение максимального числа больше числа 10.
// function number(arr) {
//     let sum = 0;
//     for (const x of arr) {
//         if (x>10) {
//       sum = sum =x;
//       return true;
//         }

//     }
//     return false;
// }
// const array=[2,10,11]
// console.log(number(array));

// В последовательности целых чисел определить третье по- ложительное число и подсчитать количество цифр в нем.
// function number(arr) {
//     let negativs = []

//     for (const x of arr) {
//         if(x % 2 ===0)
//         if (x>0) {

//         negativs.push(x)

//         }

//     }

//     const index =  negativs.length
//     return  negativs [index -1 ] .toString().length ;

// }
// const array=[1,4,3,8,3,66]
// console.log(number(array));
