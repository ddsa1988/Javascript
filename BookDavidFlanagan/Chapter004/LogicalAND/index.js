"use strict";

const x = true;
const y = false;

const a = 10;
const b = 10;

const obj = {
    x: 10,
};

const myNull = null;

console.log(x && y);
console.log();

// Short circuiting

console.log(obj && obj.x);
console.log();

console.log(myNull && myNull.x);
console.log();

if (a === b) {
    console.log("Done.");
}

a === b && console.log("Done again.");
