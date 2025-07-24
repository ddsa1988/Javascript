"use strict";

const yearString = "1988";
const yearNumber = 1988;

console.log('"1988" == 1988 => ', yearString == yearNumber);
console.log('"1988" === 1988 => ', yearString === yearNumber);
console.log();

let height;

if (height == null) {
    console.log("height is null");
}

if (height == undefined) {
    console.log("height is undefined");
}

if (height === null) {
    console.log("height is null");
}

if (height === undefined) {
    console.log("height is undefined");
}
