"use strict";

const point = {
    x: 10,
    y: 20,
};

const numbers = [0, 1, 2];

console.log("x" in point); // true
console.log("z" in point); // false
console.log("toString" in point); // true => inherits toString method from Object
console.log(point.hasOwnProperty("toString")); // false

console.log();

console.log("1" in numbers); // true
console.log("10" in numbers); // false
