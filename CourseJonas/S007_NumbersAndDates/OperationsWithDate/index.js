"use strict";

const getAge = function (birthdateString) {
    const birthdate = new Date(birthdateString);
    const millisecondsPerDay = 86400000;
    const daysPerYear = 365;

    if (!(birthdate instanceof Date) || isNaN(birthdate)) {
        throw new Error("Invalid date string.");
    }

    const now = new Date();

    const age = Math.floor((now - birthdate) / millisecondsPerDay / daysPerYear);

    return age;
};

const calculateDaysPassed = function (startDate, endDate) {
    if (!(startDate instanceof Date) || isNaN(startDate)) return 0;
    if (!(endDate instanceof Date) || isNaN(endDate)) return 0;

    const millisecondsPerDay = 86400000;

    const daysPassed = Math.floor(Math.abs(endDate - startDate) / millisecondsPerDay);

    return daysPassed;
};

console.log(getAge("1988-1-22"));

console.log(calculateDaysPassed(new Date("2026-5-20"), new Date()));
