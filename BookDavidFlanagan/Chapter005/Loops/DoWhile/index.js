"use strict";

const numbers = [0, 1, 2];

let counter = 0;
let length = numbers.length;

do {
    console.log(numbers[counter]);
    counter++;
} while (counter < 0);

console.log();

counter = 0;

do {
    console.log(numbers[counter]);
    counter++;
} while (counter < length);
