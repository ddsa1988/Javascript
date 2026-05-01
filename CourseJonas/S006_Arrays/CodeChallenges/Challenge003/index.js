"use strict";

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time  as an arrow function, and using chaining!
// Test data:
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (dogsAges) {
    if (!Array.isArray(dogsAges)) return;

    const adultDogsAvgAge = dogsAges
        .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
        .filter((age) => age >= 18)
        .reduce(
            (previous, current, index, arr) => previous + current / arr.length,
            0,
        );

    console.log(
        `The average human age of all adult dogs is ${adultDogsAvgAge.toFixed(2)}`,
    );

    console.log();
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
