"use strict";

const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const operation = (selectFunc) => {
    switch (selectFunc) {
        case 0:
            return sum;

        case 1:
            return sub;
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
