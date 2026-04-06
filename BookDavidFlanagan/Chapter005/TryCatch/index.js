"use strict";

const divide = function (x, y) {
    if (y === 0) {
        throw new Error("divide: division by zero");
    }

    return x / y;
};

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Uncaught Error: divide: division by zero
} catch (e) {
    console.error("Error => " + e.message);
    return;
} finally {
    console.log("This will always be executed");
}
