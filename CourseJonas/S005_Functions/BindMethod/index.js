"use strict";

// The bind() method creates a new function that, when called, has its this keyword set to a specific value. Unlike call() or apply(), it does not execute the function immediately but returns a copy that can be triggered later.

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LM",
    bookings: [],
    book: function (flightNumber, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`,
        );

        this.bookings.push({ flight: this.iataCode + "" + flightNumber, name });
    },
};

const latam = {
    airline: "Latam",
    iataCode: "LM",
    bookings: [],
};

const book = lufthansa.book.bind(latam);

book(239, "Diego Alexander");
book(635, "Amanda Perna");

console.log(latam);
console.log();

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT = addTaxRate(0.23);

console.log(addVAT(100));
console.log(addVAT(23));
