"use strict";

const displayMovements = function (movements, htmlEl) {
    if (
        !Array.isArray(movements) ||
        htmlEl == undefined ||
        htmlEl.tagName.toLowerCase() !== "div"
    ) {
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

const displayBalance = function (movements, htmlEl) {
    if (
        !Array.isArray(movements) ||
        htmlEl == undefined ||
        htmlEl.tagName.toLowerCase() !== "p"
    ) {
        return;
    }

    const balance = movements.reduce((previous, current) => current + previous);

    htmlEl.textContent = balance + "€";
};

export { displayMovements, createUserName, displayBalance };
