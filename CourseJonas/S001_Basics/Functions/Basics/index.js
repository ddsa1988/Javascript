"use strict";

function greeting(msg) {
    console.log(`Hello, ${msg}`);
}

function sum(n1, n2) {
    if (!(Number.isFinite(n1) && Number.isFinite(n2))) {
        throw new Error("All arguments must be numbers.");
    }

    return n1 + n2;
}

function sumNumbers(...values) {
    let total = 0;

    values.forEach((value) => {
        if (!Number.isFinite(value)) {
            throw new Error("Argument must be a number.");
        }

        total += value;
    });

    return total;
}

greeting("my name is Diego.");

console.log(sum(10, 20));

console.log(sumNumbers(10, 20, 30));
