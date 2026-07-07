"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.toString = function () {
        return `${firstName} was born in ${birthYear}.`;
    };
};

const diego = new Person("Diego", 1988);
const amanda = new Person("Amanda", 1993);

console.log(diego);
console.log();

console.log(diego.toString());
console.log();

console.log(amanda);
console.log();

console.log(amanda.toString());
console.log();
