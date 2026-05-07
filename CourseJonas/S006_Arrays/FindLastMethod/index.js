"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdrawal = movements.findLast((movement) => movement < 0);
const lastWithdrawalIndex = movements.findLastIndex((movement) => movement < 0);

console.log(lastWithdrawal);
console.log(lastWithdrawalIndex);
