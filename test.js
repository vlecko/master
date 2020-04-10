// const array = ['один','два','три']
//  for (let index = 0; index < array.length; index++) {
//      const element = array[index];

//      console.log (element);
//  }
// let index = 0;
//     while (index < array.length) { 
//         index = index +1;
//         console.log(array [index]);
//     };
    // let n = 10;


    // for (let i = 2; i <= n; i++) { // Для всех i...

    // for (let j = 2; j < i; j++) { // проверить, делится ли число..
    //     if (i % j == 0) continue  // не подходит, берём следующее
    // }

    // console.log( i ); // простое число
    // } 
        
    // function isEven(n) {
    //     return n % 2 == 0;
    //   }
    // let massiv = [7,8,10,14,16,19,20]; 
    // console.log(isEven (massiv));
    
//     function calc(hours, money) {
//     const a1 = hours * money;
    
//     return a1
// }
// console.log(calc(1,30,20))
// function number(arr) {
//     let sum = 0;
//     for (const x of arr) {
//         if(x % 2 ===0)  
//         if (x>0) {
//         sum = sum+x;      
//         }        
//     }    
//     return sum;    
// }
// const array=[2,4,6,8,2,9,-11]
// console.log(number(array));
function number(arr) {
    let sum = 0;
    for (let x= 0; x< arr.length; x++) {
        if(x % 2 ===0)  
        if (x>0) {
        sum = sum+x;      
        }        
    } 
    return sum;    
}
const array=[2,4,6,8,2,9,11]
console.log(number(array));
