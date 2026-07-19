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

const diego = new Person("Diego", new Date(1988, 0, 22));

console.log(diego.getAge());
