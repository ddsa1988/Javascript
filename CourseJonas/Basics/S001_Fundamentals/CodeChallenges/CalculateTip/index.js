"use strict";

function getTip(value) {
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
}

function getTotalBill(value) {
    if (!Number.isFinite(value)) {
        throw new Error("Argument must be a number.");
    }

    return value + getTip(value);
}

const bill = 275;
const tip = getTip(bill);
const total = getTotalBill(bill);

const msg = `The bill was ${bill}, the tips was ${tip.toFixed(
    2
)} and the total was ${total.toFixed(2)}`;

console.log(msg);
