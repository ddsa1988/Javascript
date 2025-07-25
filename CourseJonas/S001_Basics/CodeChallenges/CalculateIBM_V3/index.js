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

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = getBmi(this.mass, this.height);
        return this.bmi;
    },
};

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = getBmi(this.mass, this.height);
        return this.bmi;
    },
};

const isMarkBmiHigher = mark.calcBmi() > john.calcBmi();

if (isMarkBmiHigher) {
    console.log(
        `Mark's BMI (${mark.bmi.toFixed(
            2
        )}) is higher than John's (${john.bmi.toFixed(2)}) `
    );
} else {
    console.log(
        `John's BMI (${john.bmi.toFixed(
            2
        )}) is higher than Mark's (${mark.bmi.toFixed(2)}) `
    );
}
