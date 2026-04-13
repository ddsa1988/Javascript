"use strict";

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

const entries = Object.entries(openingHours);
const keys = Object.keys(openingHours);
const values = Object.values(openingHours);

console.log(entries);
console.log();

console.log(keys);
console.log();

console.log(values);
