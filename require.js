const data = require("./expo");
console.log(data);

function isEven(num) {
  return num % 2 === 0;
}

function isNum(num) {
  const numType = typeof num;
  return numType === "number";
}

let isNegativ = function (num) {
  return num < 0;
};

function chkNum(number) {
  if (!isNum(number)) {
    console.log("это не число");
    return false;
  }
  const x = isEven(number);
  if (x) {
    console.log("четное");
  }
  const y = !isNegativ(number);
  if (y) {
    console.log("положительное");
  }
  return x && y;
}
console.log(chkNum(data));
