"use strict";

import accounts from "../BankApp/Data/accounts.js";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((value) => value < 0);
console.log(firstWithdrawal);
console.log();

{
    const userAccount = accounts.find((account) => account.pin === 3333);
    console.log(userAccount);
}

console.log();

{
    let userAccount;

    for (const account of accounts) {
        if (account.pin !== 3333) continue;

        userAccount = account;
        break;
    }

    console.log(userAccount);
}
