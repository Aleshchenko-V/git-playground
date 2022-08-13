let a = 5;
let b = 7;

function getSumOfNumbers(...arg) {
  return Array.from(arg).reduce((cur, accum) => accum + cur, 0);
}

console.log(getSumOfNumbers(a, b));

// Comment for conflict
