"use strict";

function naesa(p) {
  let num = p;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return num;
}
const x = 2;
console.log(naesa(x));
