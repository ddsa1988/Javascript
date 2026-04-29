"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (previous, current, index) {
    console.log(`Previous in iteration ${index}: ${previous}`);
    return previous + current;
}, 0);

console.log();
console.log(balance);

console.log();

const maxMovement = movements.reduce((previous, current) => {
    return current > previous ? current : previous;
}, movements[0]);

console.log(maxMovement);
