"use strict";

function getAverage(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Parameter must be an array.");
    }

    let sum = 0;

    if (numbers.length === 0) return sum;

    for (const number of numbers) {
        if (!Number.isFinite(number)) {
            throw new Error("Parameter must contain only numbers.");
        }

        sum += number;
    }

    return sum / numbers.length;
}

const scoresDolphins = [96, 108, 89];
const scoresKoalas = [88, 91, 110];

const avgDolphins = getAverage(scoresDolphins);
const avgKoalas = getAverage(scoresKoalas);
const winner =
    avgDolphins > avgKoalas
        ? "Dolphins"
        : avgDolphins < avgKoalas
        ? "Koalas"
        : "Both";

console.log(`${winner} win the trophy.`);
