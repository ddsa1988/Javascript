"use strict";

console.log(globalThis);
console.log();

const numbers = [0, 1, 2, 3, 4, 5];

console.log(globalThis.Array.isArray(numbers));
console.log(Array.isArray(numbers));
