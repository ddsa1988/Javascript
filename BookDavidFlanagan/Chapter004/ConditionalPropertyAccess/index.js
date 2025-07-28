"use strict";

const obj = {
    x: 10,
    y: null,
};

console.log("x => " + obj.x.valueOf());
console.log();

try {
    console.log("y => " + obj.y.valueOf());
} catch (e) {
    console.log(e.message);
}

console.log();

console.log("y => " + obj.y?.valueOf());
