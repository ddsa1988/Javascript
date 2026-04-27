"use strict";

// Break and continue doesn't work on foreach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (value) {
    console.log(value);
});

console.log();

movements.forEach(function (value, index) {
    if (index === 2) return;

    console.log(`${index}: ${value}`);
});

console.log();

const currencies = new Map([
    ["USD", "Unite States Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key) {
    console.log(`${key}: ${value}`);
});

console.log();

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach(function (value, key) {
    console.log(`${value}: ${key}`);
});
