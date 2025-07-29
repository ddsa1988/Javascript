"use strict";

const numberObj = new Number(10);
const now = new Date();
const numbers = [0, 1, 2];

console.log(numberObj instanceof Number);
console.log(numberObj instanceof Array);
console.log(numberObj instanceof Object);
console.log();

console.log(now instanceof Date);
console.log(now instanceof Array);
console.log(now instanceof Object);
console.log();

console.log(numbers instanceof Array);
console.log(numbers instanceof Date);
console.log(numbers instanceof Object);
