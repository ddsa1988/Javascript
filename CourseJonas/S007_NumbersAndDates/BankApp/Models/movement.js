"use strict";

class Movement {
    #amount;
    #date;

    constructor(amount, dateString) {
        this.amount = amount;
        this.date = dateString;
    }

    set amount(value) {
        if (!Number.isFinite(value)) {
            throw new Error("Value must be a number.");
        }
        this.#amount = value;
    }

    get amount() {
        return this.#amount;
    }

    set date(dateStr) {
        const newDate = new Date(dateStr);

        if (isNaN(new Date(dateStr))) {
            throw new Error("Invalid date.");
        }

        this.#date = newDate;
    }

    get date() {
        return this.#date;
    }

    toString() {
        return `{ Amount: ${this.amount}, Date: ${this.date} }`;
    }
}

export default Movement;
