"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const anyDeposit = movements.some((movement) => movement > 0);
const everyDeposit = movements.every((movement) => movement > 0);

console.log(anyDeposit);
console.log(everyDeposit);
