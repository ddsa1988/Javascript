"use strict";

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24,
    },
};

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = openingHours[day]?.open;
    const msg = open != null ? `we open at ${open}.` : "we're closed.";
    console.log(`On ${day}, ${msg}`);
}
