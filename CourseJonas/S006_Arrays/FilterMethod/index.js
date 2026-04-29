"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (value) {
    return value > 0;
});

const withdrawals = movements.filter((value) => value < 0);

console.log(deposits);
console.log();

console.log(withdrawals);
