"use strict";

const displayMovements = function (movements, htmlEl) {
    if (!Array.isArray(movements) || htmlEl?.tagName?.toLowerCase() !== "div") {
        return;
    }

    htmlEl.innerHTML = "";

    movements.forEach(function (value, index) {
        const type = value > 0 ? "deposit" : "withdrawal";

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${value}€</div>
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

const calcDisplayBalance = function (movements, htmlEl) {
    if (!Array.isArray(movements)) return;

    if (htmlEl?.tagName?.toLowerCase() !== "p") return;

    const balance = movements.reduce((previous, current) => current + previous);

    htmlEl.textContent = balance + "€";
};

const calcDisplaySummary = function (
    movements,
    htmlElSumIn,
    htmlElSumOut,
    htmlElSumInterest,
    interest,
) {
    if (!Array.isArray(movements)) return;

    if (htmlElSumIn?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumOut?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumInterest?.tagName?.toLowerCase() !== "p") return;

    if (!Number.isFinite(interest)) return;

    const income = movements
        .filter((value) => value > 0)
        .reduce((previous, current) => previous + current, 0);

    const outcome = movements
        .filter((value) => value < 0)
        .reduce((previous, current) => previous + current, 0);

    const interestSum = movements
        .filter((value) => value > 0)
        .map((value) => (value * interest) / 100)
        .reduce((previous, current) => previous + current, 0);

    htmlElSumIn.textContent = income + "€";
    htmlElSumOut.textContent = Math.abs(outcome) + "€";
    htmlElSumInterest.textContent = interestSum + "€";
};

const getAccount = function (accounts, userName) {
    if (!Array.isArray(accounts)) return;
    if (typeof userName !== "string") return;

    const account = accounts.find((account) => account.userName === userName);

    return account;
};

export {
    displayMovements,
    createUserName,
    calcDisplayBalance,
    calcDisplaySummary,
    getAccount,
};
