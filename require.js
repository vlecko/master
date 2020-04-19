const data = require('./expo');
let x = data -10;
console.log("x", x)
    for (let index = 4; index >0; index = index-1) {
     x = x*index;  
           
    }
let array =[0,2,3]

 
    for (let index = 0; index < array.length; index++) {
     array [index] = array[index]+1;
        console.log(array[index])
    }
    
    console.log("array", array)

let array = new Array (3)

 
    for (let index = 0; index < array.length; index++) {
     array [index] = x+1;
        console.log(array[index])
    }
    
    console.log("array", array)