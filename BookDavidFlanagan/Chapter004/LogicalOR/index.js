"use strict";

const x = true;
const y = false;

const obj = {
    x: 10,
};

const myNull = null;

console.log(x || y);
console.log();

// Short circuiting

const test = myNull || obj.x;
console.log(test);
