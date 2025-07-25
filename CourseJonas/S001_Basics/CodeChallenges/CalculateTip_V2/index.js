"use strict";

const getTip = function (value) {
    if (!Number.isFinite(value)) {
        throw new Error("Argument must be a number.");
    }

    const lowerTip = 15 / 100;
    const highTip = 20 / 100;
    const minValue = 50;
    const maxValue = 300;

    let tip = 0;

    if (value >= minValue && value <= maxValue) {
        tip = value * lowerTip;
    } else {
        tip = value * highTip;
    }

    return tip;
};

const getTotalBill = function (value) {
    if (!Number.isFinite(value)) {
        throw new Error("Argument must be a number.");
    }

    return value + getTip(value);
};

const bills = [275, 555, 44];
const tips = [];
const totals = [];

bills.forEach((bill) => {
    tips.push(getTip(bill));
    totals.push(getTotalBill(bill));
});

for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = tips[i];
    const total = totals[i];

    const msg = `The bill was ${bill}, the tip was ${tip.toFixed(
        2
    )} and the total was ${total.toFixed(2)}`;

    console.log(msg);
}
