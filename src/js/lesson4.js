function naesa(num) {
  const resalt = {
    nass: [],
    max: num,
  };
  while (num !== 1) {
    if (resalt.max < num) {
      resalt.max = num;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    resalt.nass.push(num);
  }
  resalt.steps = resalt.nass.length;
  return resalt;
}
const arr = 9;
const x = naesa(arr);
console.log(x);
console.log(x.steps);
