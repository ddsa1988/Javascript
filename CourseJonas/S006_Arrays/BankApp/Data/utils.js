"use strict";

const displayMovements = function (account, htmlEl) {
    if (!Array.isArray(account?.movements) || htmlEl?.tagName?.toLowerCase() !== "div") return;

    htmlEl.innerHTML = "";

    account.movements.forEach(function (value, index) {
        const type = value > 0 ? "deposit" : "withdrawal";

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${value.toFixed(2)}€</div>
        </div>`;

        htmlEl.insertAdjacentHTML("afterbegin", html);
    });
};

const createUserName = function (user) {
    if (typeof user !== "string") return "";

    const userName = user
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("");

    return userName;
};

const calcDisplayBalance = function (account, htmlEl) {
    if (!Array.isArray(account?.movements)) return;

    if (htmlEl?.tagName?.toLowerCase() !== "p") return;

    account.balance = account.movements.reduce((previous, current) => current + previous);

    htmlEl.textContent = account.balance.toFixed(2) + "€";
};

const calcDisplaySummary = function (account, htmlElSumIn, htmlElSumOut, htmlElSumInterest) {
    if (!Array.isArray(account?.movements)) return;

    if (htmlElSumIn?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumOut?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumInterest?.tagName?.toLowerCase() !== "p") return;

    if (!Number.isFinite(account?.interestRate)) return;

    const income = account.movements.filter((value) => value > 0).reduce((previous, current) => previous + current, 0);

    const outcome = account.movements.filter((value) => value < 0).reduce((previous, current) => previous + current, 0);

    const interest = account.movements
        .filter((value) => value > 0)
        .map((value) => (value * account.interestRate) / 100)
        .reduce((previous, current) => previous + current, 0);

    htmlElSumIn.textContent = income.toFixed(2) + "€";
    htmlElSumOut.textContent = Math.abs(outcome).toFixed(2) + "€";
    htmlElSumInterest.textContent = interest.toFixed(2) + "€";
};

const getAccount = function (accounts, userName) {
    if (!Array.isArray(accounts)) return;
    if (typeof userName !== "string") return;

    const account = accounts.find((account) => account.userName === userName);

    return account;
};

const toTitleCase = function (content) {
    if (typeof content !== "string") return content;

    const words = [];

    for (const word of content.trim().split(" ")) {
        words.push(word[0].toUpperCase() + word.substring(1));
    }

    return words.join(" ");
};

const getGreeting = function (fullName) {
    if (typeof fullName !== "string") return "Welcome back!";

    const firstName = fullName.split(" ")[0].trim();

    if (firstName.length === 0) return "Welcome back!";

    return "Welcome back, " + toTitleCase(firstName) + "!";
};

export { displayMovements, createUserName, calcDisplayBalance, calcDisplaySummary, getAccount, getGreeting };
