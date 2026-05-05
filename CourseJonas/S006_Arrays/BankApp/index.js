"use strict";

import accounts from "./Data/accounts.js";
import * as el from "./Data/elements.js";
import * as utils from "./Data/utils.js";

const interest = 1.2;

accounts.forEach((account) => {
    account.userName = utils.createUserName(account.owner);
});

el.btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    const account = utils.getAccount(accounts, el.inputLoginUsername?.value);

    if (account?.pin !== Number(el.inputLoginPin?.value)) return;

    utils.displayMovements(account.movements, el.containerMovements);

    utils.calcDisplayBalance(account.movements, el.labelBalance);

    utils.calcDisplaySummary(
        account.movements,
        el.labelSumIn,
        el.labelSumOut,
        el.labelSumInterest,
        interest,
    );

    el.inputLoginUsername.value = "";
    el.inputLoginPin.value = "";
    el.containerApp.style.opacity = "1.0";
});
