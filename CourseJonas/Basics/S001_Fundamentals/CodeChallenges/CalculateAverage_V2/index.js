"use strict";

const getAverage = (...values) => {
    let sum = 0;

    values.forEach((value) => {
        if (!Number.isFinite(value)) {
            throw new Error("Argument must be a number.");
        }

        sum += value;
    });

    return sum / values.length;
};

const checkWinner = (avgDolphins, avgKoalas) => {
    const ruleValue = 2;

    if (avgDolphins > avgKoalas * ruleValue) {
        console.log(`Dolphins win (${avgDolphins} x ${avgKoalas}).`);
        return;
    }

    if (avgKoalas > avgDolphins * ruleValue) {
        console.log(`Koalas win (${avgKoalas} x ${avgDolphins}).`);
        return;
    }

    console.log(`No team wins! Dolphins ${avgDolphins} x Koalas ${avgKoalas}.`);
};

{
    const avgDolphins = getAverage(44, 23, 71);
    const avgKoalas = getAverage(65, 54, 49);

    checkWinner(avgDolphins, avgKoalas);
}

console.log();

{
    const avgDolphins = getAverage(85, 54, 41);
    const avgKoalas = getAverage(23, 34, 27);

    checkWinner(avgDolphins, avgKoalas);
}
