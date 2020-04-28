// В последовательности целых положительных чисел опреде-
// лить максимальное четное число и его порядковый номер.
// 7,8,10,14,16,19,20 ->,20,6
// 4,5,7,43,5,9,3 ->4,0

// function maxElement (mas){
//     let max;
//     let min = mas[0];
//     for(let i = 0; i < mas.length; i++){
//         if((mas[i]) < min){
//             min = mas[i];
//         } else {
//             max = mas[i];
//         }
//     }
//     return max;
// }

//   function maxElement(n1,n2) {
//       if (n1>n2) {
//           if(n1 % 2 ===0)
//           return n1;

//       }else{
//           if(n2 % 2 ==0)
//           return -1;
//       }
//   }
//   console.log(maxElement(2,3))

// function maxElement(n1) {
//     if (n1 % 2===0) {
//         return n1 ;

//     }else{
//         return -1;
//     }
// }
// console.log(maxElement(20,21))

// function nameNumder(j1,j2) {

// }

// function name(p,e,b) {
//     const a = p>e>b;
//     return a;

// }
// console.log(name(3,4,6))

//     ) сравниваешь два числа, находишь большее
// 2) для большего проверяешь четное ли оно, если да, то возвращаешь
// 3) если нет, то проверяешь на чтеность меньшее.
// если четное - возвращаешь его
// Если нет - возвращаешь -1
// написать функцию которая принимает 2 числа и возвращает большее четное из них. Если оба числа не четные - возвращается -1

// function nomer1(j1,j2) {
//         if (j1>j2) {
//             if (j1 % 2 === 0) {
//                 return j1;
//             }else if (j2 % 2 ===0) {
//                 return j2;
//             }else{
//                 return -1;
//             }
//         }else{
//                 if (j2 % 2 === 0) {
//                     return j2;
//                 }else{
//                     if (j1 % 2 ===0) {
//                         return j1;
//                     }else{
//                         return -1;
//                     }
//                 }
//             }
//         }

//             console.log(nomer(33,30))

//                 function nomer2(j1,j2) {
//                     if (j1>j2) {
//                     const max = findEven(j1, j2);
//                     return max;
//                     }else{
//                          return  findEven(j2, j1);
//                         }
//                     }
//     function findEven(j1,j2) {
//         if (j1 % 2 === 0) {
//             return j1;
//         }else if (j2 % 2 === 0) {
//             return j2;
//         }else{
//             return -1;
//         }

//     }

//     // console.log(nomer2(4 ,11))

//     function nomer3(j1,j2) {
//         let max =j2;
//         let min =j1;
//         if (j1>j2) {
//         max = j1;
//         min =j2;
//         }
//         if (max % 2 === 0) {
//             return max;
//         }else if (min % 2 === 0) {
//             return min;
//         }else{
//             return -1;
//         }

// }
// const rep =nomer3(3 ,11)
// console.log(rep)

// function max(a1,a2,a3) {
//     if (a1>a2) {
//         return a1;
//     }else if(a2>a3){
//         return a2
//     }else{
//         return a3;
//     }

// }
// console.log(max(10,11,2))

// function max(a1,a2,a3) {
//     if (a1>a2) {
//         return a1;
//     }else if(a2<a3){
//         return a2
//     }else{
//         return a3;
//     }

// }
// console.log(max(1,2,10))

// 1) написать функцию которая принимает два числа. Первое - часы, второе - минуты. И возвращает время одной цифрой. Например 17 часов 30 минут станет 17.5. Т.е. входные данные 13 и 20 станут 13.3333333

// написать ф-цию котонаписать ф-цию которая принимает стоимость нормачаса и потраченное время и возвращает итоговую стоимость.
//  Пример: 20 денег, 1.5 часа - 30 денег. 15 и 0.3 -> 4.5рая принимает стоимость нормачаса и потраченное время и возвращает итоговую стоимость. Пример: 20 денег, 1.5 часа - 30 денег. 15 и 0.3 -> 4.5
// function calc(hours, minutes) {
//     const d = minutes / 60;
//     const d2 = hours +d;
//         return d2;

// }
// console.log(calc(17,30))

// function calc2(hours, money) {
//     const a1 = hours * money;

//     return a1
// }
// console.log(calc2(1,30,20))

//  function time(minutes,minutes1,minutes2,minutes3,minutes4,minutes5,minutes6,minutes7,minutes8) {
//     const p = minutes+minutes1+minutes2+minutes3+minutes4+minutes5+minutes6+minutes7+minutes8;
//     const a = p / 60
//     const b = a * 40;
//     return b;
//  }
//  console.log(time(17,5,4,9,25,19,16,4,7));

// let test = 7;
// if (test > 6){
//     console.log ('test:', test);
// };

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

// //     function show(val,val1){
// //         console.log(val,val1)
// //     }
// //    show(7)
// //    show('Hello', 'would')

//    function min(v1,v2){
//        if (v1<v2){
//         return v1;
//        }
//        else{
//         return v2;
//        }

//    }
// //    const min2= min(2,3);
// //    console.log(min2);
// //    console.log(min(4,3))
//
