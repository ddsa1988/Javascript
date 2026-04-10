"use strict";

{
    // Rest pattern
    const arr = [1, 2, 3, 4, 5];
    const [a, b, ...others] = arr;

    console.log(others);
}

console.log();

{
    // Parameters
    const test = function (...numbers) {
        console.log(numbers);
    };

    test(1, 2, 3, 4, 5);
}
