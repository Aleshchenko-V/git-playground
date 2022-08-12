let a = 5;
let b = 7;

function getSumOfNumbers(...arg) {
  return Array.from(arg).reduce((cur, accum) => accum + cur, 0);
}

console.log(getSumOfNumbers(a, b));

// COMMENT FOR DEVELOP BRANCH
// IN MAIN BRANCH THIS COMMENT IS NOT EXIST

function helloDevelop() {
  alert("Hello, develop!");
}

// This comment only in about(features) branche
console.log("features");
