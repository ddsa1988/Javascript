"use strict";

const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const operation = (func, a, b) => {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return;
    if (typeof func !== "function") return;

    return func(a, b);
};

const x = 20;
const y = 10;

console.log(operation(sum, x, y));

console.log(operation(sub, x, y));
