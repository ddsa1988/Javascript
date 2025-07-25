"use strict";

const diego = {
    firstName: "Diego",
    lastName: "Alexander",
    birthdate: new Date(1988, 0, 22),
    job: "programmer",
    isMarried: true,
    hasDriversLicense: false,
    getAge: function () {
        const now = new Date();
        const age = now.getFullYear() - this.birthdate.getFullYear();
        return age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.getAge()} years old ${
            this.job
        } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    },
};

console.log(diego.getAge());
console.log(diego["getSummary"]());
