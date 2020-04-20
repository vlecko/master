const data = require("./expo");
console.log(data);

function isEven(num) {
  return num % 2 === 0;
}

const isDataEven = isEven(data);
console.log("isDataEven", isDataEven);

function isNum(num) {
  const numType = typeof num;
  return numType === "number";
}
// console.log(isNum(4))
