"use strict";

// Person
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

// Student inherits from Person prototype
const Student = function (firstName, birthdate, course) {
    Person.call(this, firstName, birthdate);

    this.course = course;
};

Student.prototype = Object.create(Person.prototype); // Linking prototypes
Student.prototype.constructor = Student; // Set the constructor property to the child object

Student.prototype.getGreeting = function () {
    return `My name is ${this.firstName} and I study ${this.course}.`;
};

const student = new Student("Diego", new Date(1988, 0, 22), "Software Engineering");

console.log(student);
console.log(Student.prototype.constructor);
console.log(student.getGreeting());
console.log(student.getAge());
console.log(student.toString());
