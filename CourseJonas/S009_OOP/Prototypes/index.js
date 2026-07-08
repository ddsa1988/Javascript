"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.toString = function () {
    //     return `${firstName} was born in ${birthYear}.`;
    // };
};

Person.prototype.toString = function () {
    return `${this.firstName} was born in ${this.birthYear}.`;
};

Person.prototype.birthplace = "";

const diego = new Person("Diego", 1988);
const amanda = new Person("Amanda", 1993);

console.log(diego.toString());
console.log(amanda.toString());

console.log(diego.hasOwnProperty("firstName"));
console.log(diego.hasOwnProperty("birthplace"));

diego.birthplace = "Brazil";
amanda.birthplace = "Portugal";

console.log(diego);
console.log(amanda);

console.log(Person.prototype);
console.log(diego.__proto__);

console.log(diego.hasOwnProperty("birthplace"));
