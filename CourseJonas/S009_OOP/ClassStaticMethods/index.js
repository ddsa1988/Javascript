"use strict";

class Calculator {
    static sum(a, b) {
        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            throw new TypeError("Parameters must be numbers.");
        }

        return a + b;
    }
}

console.log(Calculator.sum(10, 20));
