"use strict";

const logger = function (msg) {
    console.log(msg);
};

{
    const square = function (x, log) {
        log(x);
        return x * x;
    };

    try {
        square(10, null);
    } catch (e) {
        console.log(e.message);
    }

    square(10, logger);
}

console.log();

{
    const square = function (x, log) {
        log?.(x);
        return x * x;
    };

    square(10, null);

    try {
        square(10, 10);
    } catch (e) {
        console.log(e.message);
    }

    square(10, logger);
}

console.log();

{
    const square = function (x, log) {
        if (typeof log === "function") {
            log(x);
        }

        return x * x;
    };

    square(10, null);
    square(10, 10);
    square(10, logger);
}
