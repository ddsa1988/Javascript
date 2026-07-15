"use strict";

class Person {
    #firstName;
    #birthdate;

    constructor(firstName, birthdate) {
        this.firstName = firstName;
        this.birthdate = birthdate;
    }

    set firstName(name) {
        if (typeof name !== "string") {
            throw new TypeError("Invalid data type: Name must be a string.");
        }

        if (name.trim() === 0) {
            throw new Error("Name must not be empty.");
        }

        this.#firstName = name;
    }

    get firstName() {
        return this.#firstName;
    }

    set birthdate(date) {
        const now = new Date();
        const diff = now - date;

        if (diff < 0) {
            throw new Error("Date must be equal or greater than today.");
        }

        this.#birthdate = date;
    }

    get birthdate() {
        return this.#birthdate;
    }

    get age() {
        const now = new Date();
        const timeDiff = now - this.#birthdate;

        if (timeDiff < 0) return 0;

        const age = new Date(timeDiff).getFullYear() - 1970;

        return Number.isFinite(age) ? age : 0;
    }
}

const diego = new Person("Diego", new Date(1988, 0, 22));

console.log(diego.firstName);
console.log(diego.birthdate);
console.log(diego.age);
