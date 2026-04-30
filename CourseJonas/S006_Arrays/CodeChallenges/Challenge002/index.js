"use strict";

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least years old)

// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

// 4. Run the function for both test datasets
// Test data:
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (dogsAges) {
    if (!Array.isArray(dogsAges)) return;

    const dogsAgesHumanYear = dogsAges.map((age) =>
        age <= 2 ? age * 2 : age * 4 + 16,
    );

    console.log(`Dogs ages in human year: `, dogsAgesHumanYear.join(", "));

    console.log();

    const adultDogs = dogsAgesHumanYear.filter((age) => age >= 18);

    console.log(
        `Dogs with age greater than 18 human years: `,
        adultDogs.join(", "),
    );

    const adultDogsAvgAge =
        adultDogs.reduce((previous, current) => {
            return previous + current;
        }, 0) / adultDogs.length;

    console.log();

    console.log(
        `The average human age of all adult dogs is ${adultDogsAvgAge.toFixed(2)}`,
    );

    console.log();
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
