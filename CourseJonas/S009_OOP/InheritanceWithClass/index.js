"use strict";

class Person {
    constructor(firstName, birthdate) {
        this.firstName = firstName;
        this.birthdate = birthdate;
    }

    getAge() {
        const now = new Date();
        const timeDiff = now - this.birthdate;

        if (timeDiff < 0) return 0;

        const age = new Date(timeDiff).getFullYear() - 1970;

        return Number.isFinite(age) ? age : 0;
    }
}

class Student extends Person {
    constructor(firstName, birthdate, course) {
        super(firstName, birthdate);
        this.course = course;
    }

    getGreeting() {
        return `My name is ${this.firstName} and I study ${this.course}.`;
    }
}

const diego = new Student("Diego", new Date(1988, 0, 22), "Software Engineering");

console.log(diego.getAge());
console.log(diego.getGreeting());
