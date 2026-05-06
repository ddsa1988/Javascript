"use strict";

import accounts from "./Data/accounts.js";
import * as el from "./Data/elements.js";
import * as utils from "./Data/utils.js";

const updateUI = function (account) {
    utils.displayMovements(account, el.containerMovements);
    utils.calcDisplayBalance(account, el.labelBalance);
    utils.calcDisplaySummary(account, el.labelSumIn, el.labelSumOut, el.labelSumInterest);
};

const cleanInputFields = function () {
    el.inputTransferAmount.value = "";
    el.inputTransferAmount.blur();
    el.inputTransferTo.value = "";
    el.inputTransferTo.blur();
    el.inputLoanAmount.value = "";
    el.inputLoanAmount.blur();
    el.inputCloseUsername.value = "";
    el.inputCloseUsername.blur();
    el.inputClosePin.value = "";
    el.inputClosePin.blur();
};

let currentAccount;

accounts.forEach((account) => {
    account.userName = utils.createUserName(account.owner);
});

el.btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentAccount = utils.getAccount(accounts, el.inputLoginUsername?.value);

    if (currentAccount?.pin !== Number(el.inputLoginPin.value)) return;

    updateUI(currentAccount);

    el.labelWelcome.textContent = utils.getGreeting(currentAccount.owner);
    el.inputLoginUsername.value = "";
    el.inputCloseUsername.blur();
    el.inputLoginPin.value = "";
    el.inputLoginPin.blur();
    el.containerApp.style.opacity = 100;
});

el.btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = Number(el.inputTransferAmount.value);

    const receiverAccount = accounts.find((account) => account.userName === el.inputTransferTo.value);

    cleanInputFields();

    if (receiverAccount == undefined || receiverAccount.userName === currentAccount.userName) return;

    if (!Number.isFinite(amount) || amount <= 0 || amount > currentAccount.balance) return;

    currentAccount.movements.push(amount * -1);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
});

el.btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
});

el.btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    const userName = el.inputCloseUsername.value;
    const userPin = el.inputClosePin.value;

    cleanInputFields();

    if (currentAccount.userName !== userName || currentAccount.pin.toString() !== userPin) return;

    const index = accounts.findIndex((account) => account.userName === userName);

    accounts.splice(index, 1);

    el.containerApp.style.opacity = 0;
});
