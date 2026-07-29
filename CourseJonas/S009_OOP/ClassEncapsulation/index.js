"use strict";

class Account {
    #owner;
    #movements = [];

    constructor(owner) {
        this.owner = owner;
    }

    get owner() {
        return this.#owner;
    }

    set owner(value) {
        if (typeof value !== "string") {
            throw new TypeError("Value must be a string.");
        }

        if (value.trim().length === 0) {
            throw new Error("Value cannot be empty.");
        }

        this.#owner = value;
    }

    getBalance() {
        return this.#movements.reduce((previous, current) => previous + current, 0);
    }

    getMovements() {
        return this.#movements;
    }

    deposit(value) {
        if (typeof value !== "number") {
            throw new TypeError("Value must be a number.");
        }

        if (value <= 0) {
            throw new Error("Value must be greater than zero.");
        }

        this.#movements.push(value);
    }

    withdrawal(value) {
        if (typeof value !== "number") {
            throw new TypeError("Value must be a number.");
        }

        if (value <= 0) {
            throw new Error("Value must be greater than zero.");
        }

        this.#movements.push(-value);
    }

    toString() {
        return `{ Owner: ${this.#owner}, Movements: [${this.getMovements().join(", ")}], Balance: ${this.getBalance()} }`;
    }
}

const acc = new Account("Diego");

console.log(acc);

console.log(acc.toString());

acc.deposit(500);
acc.withdrawal(200);
acc.deposit(1000);
acc.withdrawal(100);

console.log(acc.toString());
