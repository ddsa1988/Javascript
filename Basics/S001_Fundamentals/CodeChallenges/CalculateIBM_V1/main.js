"use strict";

function getBmi(weight, height) {
    if (!Number.isFinite(weight)) {
        throw new Error("Parameter 'weight' is not a number.");
    }

    if (!Number.isFinite(height)) {
        throw new Error("Parameter 'height' is not a number.");
    }

    if (weight <= 0) {
        throw new Error("Parameter 'weight' has to be greater than zero.");
    }

    if (height <= 0) {
        throw new Error("Parameter 'height' has to be greater than zero.");
    }

    return weight / (height * height);
}

const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = getBmi(weightMark, heightMark);
const bmiJohn = getBmi(weightJohn, heightJohn);

const isMarkBmiHigher = bmiMark > bmiJohn;

console.log("Mark bmi: " + bmiMark.toFixed(2));
console.log("John bmi: " + bmiJohn.toFixed(2));
console.log("Is Mark BMI higher than John's: " + isMarkBmiHigher);
