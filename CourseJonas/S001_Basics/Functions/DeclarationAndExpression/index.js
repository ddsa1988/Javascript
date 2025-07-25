"use strict";

// Function declaration

function getAge1(birthdateString) {
    const unixEpochYear = 1970;
    const birthdate = Date.parse(birthdateString);
    const now = Date.now();

    if (!Number.isFinite(birthdate)) {
        throw new Error("Argument must be a date.");
    }

    const timeDiff = now - birthdate;
    const ageDate = new Date(timeDiff);
    const age = ageDate.getFullYear() - unixEpochYear;

    if (age < 0) {
        throw new Error("Argument must be less than today.");
    }

    return age;
}

// Function expression

const getAge2 = function (birthdateString) {
    const unixEpochYear = 1970;
    const birthdate = Date.parse(birthdateString);
    const now = Date.now();

    if (!Number.isFinite(birthdate)) {
        throw new Error("Argument must be a date.");
    }

    const timeDiff = now - birthdate;
    const ageDate = new Date(timeDiff);
    const age = ageDate.getFullYear() - unixEpochYear;

    if (age < 0) {
        throw new Error("Argument must be less than today.");
    }

    return age;
};

const birthdate = "1993-10-16";

console.log(getAge1(birthdate));
console.log(getAge2(birthdate));

console.log(getAge1);
console.log(getAge2);
