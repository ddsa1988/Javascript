"use strict";

const sum = function (a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Parameter must be only numbers.");
    }

    return a + b;
};

const sub = function (a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Parameter must be only numbers.");
    }

    return a - b;
};

const multiply = function (a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Parameter must be only numbers.");
    }

    return a * b;
};

const division = function (a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Parameter must be only numbers.");
    }

    if (b === 0) {
        console.log("Division by zero error.");
        return 0;
    }

    return a / b;
};

const operation = (selectFunc) => {
    switch (selectFunc) {
        case 0:
            return sum;
        case 1:
            return sub;
        case 2:
            return multiply;
        case 3:
            return division;
        default:
            throw new Error("Invalid option");
    }
};

const x = 20;
const y = 10;
let op;

op = operation(0);

console.log(`Calling the ${op.name} function.`);
console.log(op(x, y));
console.log();

op = operation(1);

console.log(`Calling the ${op.name} function.`);
console.log(op(x, y));
console.log();

op = operation(2);

console.log(`Calling the ${op.name} function.`);
console.log(op(x, y));
console.log();

op = operation(3);

console.log(`Calling the ${op.name} function.`);
console.log(op(x, y));
console.log();
