let user = [
    {
        firstName: 'Karpovich ',
        lestName: 'Dima',
        age: 28
    }, {
        firstName: 'Benedik ',
        lestName: 'Vadim ',
        age: 25
    }, {
        firstName: ' Kravchuk ',
        lestName: 'Misha',
        age: 26
    },
];
let fn1 =document.getElementById('oneFirst')
let fn2 =document.getElementById('twoLast')
let fn3 =document.getElementById('threeAge')
 fn1.innerHTML = 'Karpovich'
 fn2.innerHTML = 'Benedik'
 fn3.innerHTML = 'Kravchuk'
   
 console.log(fn1)

 document.body.style.background = 'purple','red'; 
 setTimeout(() => document.body.style.background = '', 3000);
 

let animal ={
    eats: true
};
let rabbit ={
    jumps:true
};
rabbit.eat