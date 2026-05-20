"use strict";

const now = new Date();

console.log(now);
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

console.log(new Date(1988, 1, 22));
console.log(new Date("1993-10-16"));

console.log(Date.now());
