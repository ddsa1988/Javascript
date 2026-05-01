"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sum = movements
    .filter((value) => value > 0)
    .map((value) => value / 10)
    .reduce((previous, current) => previous + current, 0);

console.log(sum);
