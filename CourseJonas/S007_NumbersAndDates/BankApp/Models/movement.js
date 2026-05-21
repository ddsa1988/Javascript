"use strict";

class Movement {
    #amount;
    #date;

    constructor(amount, dateStr) {
        this.amount = amount;
        this.date = dateStr;
    }

    set amount(value) {
        this.#amount = value;
    }

    get amount() {
        return this.#amount;
    }

    set date(dateStr) {
        const newDate = new Date(dateStr);

        if (isNaN(new Date(dateStr))) {
            throw new Error("Invalid movement date.");
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
