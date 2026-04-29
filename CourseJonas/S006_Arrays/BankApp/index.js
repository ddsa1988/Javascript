"use strict";

import accounts from "./Data/accounts.js";
import * as elements from "./Data/elements.js";
import * as utils from "./Data/utils.js";

utils.displayMovements(accounts[0].movements, elements.containerMovements);

accounts.forEach((account) => {
    account.userName = utils.createUserName(account.owner);
});

utils.displayBalance(accounts[0].movements, elements.labelBalance);
