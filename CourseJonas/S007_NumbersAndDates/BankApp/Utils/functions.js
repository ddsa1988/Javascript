"use strict";

const formatCurrency = function (value, locale, currency) {
    if (!Number.isFinite(value)) return;
    if (typeof locale !== "string") return;
    if (typeof currency !== "string") return;

    return Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
};

const displayMovements = function (account, htmlEl, sort = false) {
    if (!Array.isArray(account?.movements) || htmlEl?.tagName?.toLowerCase() !== "div") return;

    const movements = sort ? account.movements.toSorted((a, b) => a.amount - b.amount) : [...account.movements];

    htmlEl.innerHTML = "";

    movements.forEach(function (movement, index) {
        const type = movement.amount > 0 ? "deposit" : "withdrawal";

        const displayValue = formatCurrency(movement.amount, account.locale, account.currency);

        const daysPassedMov = calcDaysPassed(movement.date, new Date());

        let displayDate = "";

        switch (daysPassedMov) {
            case 0:
                displayDate = "Today";
                break;
            case 1:
                displayDate = "Yesterday";
                break;
            case daysPassedMov < 8:
                displayDate = `${daysPassedMov} days ago`;
                break;
            default:
                displayDate = Intl.DateTimeFormat(account.locale).format(movement.date);
                break;
        }

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
            <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${displayValue}</div>
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

    account.balance = account.movements
        .map((movement) => movement.amount)
        .reduce((previous, current) => current + previous);

    htmlEl.textContent = formatCurrency(account.balance, account.locale, account.currency);
};

const calcDisplaySummary = function (account, htmlElSumIn, htmlElSumOut, htmlElSumInterest) {
    if (!Array.isArray(account?.movements)) return;

    if (htmlElSumIn?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumOut?.tagName?.toLowerCase() !== "p") return;

    if (htmlElSumInterest?.tagName?.toLowerCase() !== "p") return;

    if (!Number.isFinite(account?.interestRate)) return;

    const income = account.movements
        .filter((movement) => movement.amount > 0)
        .map((movement) => movement.amount)
        .reduce((previous, current) => previous + current, 0);

    const outcome = account.movements
        .filter((movement) => movement.amount < 0)
        .map((movement) => movement.amount)
        .reduce((previous, current) => previous + current, 0);

    const interest = account.movements
        .filter((movement) => movement.amount > 0)
        .map((movement) => (movement.amount * account.interestRate) / 100)
        .reduce((previous, current) => previous + current, 0);

    htmlElSumIn.textContent = formatCurrency(income, account.locale, account.currency);
    htmlElSumOut.textContent = formatCurrency(Math.abs(outcome), account.locale, account.currency);
    htmlElSumInterest.textContent = formatCurrency(interest, account.locale, account.currency);
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

const getDate = function (locale) {
    if (typeof locale !== "string") return;

    const now = new Date();

    return now.toLocaleDateString(locale) + ", " + now.toLocaleTimeString(locale);
};

const calcDaysPassed = function (startDate, endDate) {
    if (!(startDate instanceof Date) || isNaN(startDate)) return 0;
    if (!(endDate instanceof Date) || isNaN(endDate)) return 0;

    const millisecondsPerDay = 86400000;

    const daysPassed = Math.floor(Math.abs(endDate - startDate) / millisecondsPerDay);

    return daysPassed;
};

const startLogOutTimer = function (seconds) {
    if (!Number.isInteger(seconds) || seconds < 0) return;

    const tick = function () {
        const min = String(Math.trunc(seconds / 60)).padStart(2, "0");

        const sec = String(seconds % 60).padStart(2, "0");

        console.clear();
        console.log(`${min}:${sec}`);

        if (seconds <= 0) {
            clearInterval(timer);
        }

        seconds--;
    };

    tick();

    const timer = setInterval(tick, 1000);

    return timer;
};

export {
    displayMovements,
    createUserName,
    calcDisplayBalance,
    calcDisplaySummary,
    getAccount,
    getGreeting,
    getDate,
    calcDaysPassed,
};
