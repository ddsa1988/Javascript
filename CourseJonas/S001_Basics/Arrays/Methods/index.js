"use strict";

const names = ["Diego", "Amanda"];

// Insert element in the last position
names.push("Amora");

// Insert element in the first position
names.unshift("Ameixa");

console.log(names);

// Remove element in the last position
let namePopped = names.pop();
console.log(namePopped);

// Remove element in the first position
namePopped = names.shift();
console.log(namePopped);

// Return the index of the element
let index = names.indexOf("Amanda");
console.log(index);

index = names.indexOf("Ameixa");
console.log(index);

// Return true or false if the element exist
let include = names.includes("Amanda");
console.log(include);

include = names.includes("Ameixa");
console.log(include);
