"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const names = ["diego", "amanda", "amora", "ameixa"];

const movementsDouble = movements.map(function (value) {
    return value * 2;
});

const namesUpper = names.map((name) => name.toUpperCase());

console.log(movementsDouble);
console.log();

console.log(namesUpper);
console.log();

const movementsDescription = movements.map((value, index, arr) => {
    return `${index} = ${value}`;
});

console.log(movementsDescription);
