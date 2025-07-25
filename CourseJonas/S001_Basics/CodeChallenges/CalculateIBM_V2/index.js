"use strict";

const getBmi = function (weight, height) {
    if (!Number.isFinite(weight)) {
        throw new Error("Argument 'weight' is not a number.");
    }

    if (!Number.isFinite(height)) {
        throw new Error("Argument 'height' is not a number.");
    }

    if (weight <= 0) {
        throw new Error("Argument 'weight' has to be greater than zero.");
    }

    if (height <= 0) {
        throw new Error("Argument 'height' has to be greater than zero.");
    }

    return weight / (height * height);
};

const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = getBmi(weightMark, heightMark);
const bmiJohn = getBmi(weightJohn, heightJohn);

const isMarkBmiHigher = bmiMark > bmiJohn;

if (isMarkBmiHigher) {
    console.log(
        `Mark's BMI (${bmiMark.toFixed(
            2
        )}) is higher than John's (${bmiJohn.toFixed(2)}) `
    );
} else {
    console.log(
        `John's BMI (${bmiJohn.toFixed(
            2
        )}) is higher than Mark's (${bmiMark.toFixed(2)}) `
    );
}
