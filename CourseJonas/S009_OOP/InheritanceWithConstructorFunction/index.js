"use strict";

const Person = function (firstName, birthdate) {
    this.firstName = firstName;
    this.birthdate = birthdate;
};

Person.prototype.getAge = function () {
    const now = new Date();
    const timeDiff = now - this.birthdate;

    if (timeDiff < 0) return 0;

    const age = new Date(timeDiff).getFullYear() - 1970;

    return Number.isFinite(age) ? age : 0;
};

Person.prototype.toString = function () {
    return `${this.firstName} was born in ${this.birthdate.getFullYear()}.`;
};
