"use strict";

import accounts from "./Data/accounts.js";
import * as elements from "./Data/elements.js";

const displayMovements = function (movements) {
    if (!Array.isArray(movements)) return;

    elements.containerMovements.innerHTML = "";

    movements.forEach(function (value, index) {
        const type = value > 0 ? "deposit" : "withdrawal";

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${value}€</div>
        </div>`;

        elements.containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

displayMovements(accounts[0].movements);
