"use strict";

import accounts from "./Data/accounts.js";
import * as elements from "./Data/elements.js";
import * as utils from "./Data/utils.js";

const interest = 1.2;
const movements = accounts[0].movements;

utils.displayMovements(movements, elements.containerMovements);

accounts.forEach((account) => {
    account.userName = utils.createUserName(account.owner);
});

utils.calcDisplayBalance(movements, elements.labelBalance);

utils.calcDisplaySummary(
    movements,
    elements.labelSumIn,
    elements.labelSumOut,
    elements.labelSumInterest,
    interest,
);
