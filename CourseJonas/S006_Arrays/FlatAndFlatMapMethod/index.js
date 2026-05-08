"use strict";

const arr1 = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
];

const arr2 = [
    [[0, 1], 2, [3, 4]],
    [5, 6, 7, 8, 9],
];

console.log(arr1);
console.log();

console.log(arr1.flat());
console.log();

console.log(arr2);
console.log();

console.log(arr2.flat());
console.log();

console.log(arr2.flat(2));
console.log();
