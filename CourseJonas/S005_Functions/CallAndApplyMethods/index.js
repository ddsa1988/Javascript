"use strict";

// The call() and apply() are built-in methods used to invoke functions while explicitly setting the value of the this keyword. They are essential for function borrowing, allowing one object to use a method belonging to another.

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

lufthansa.book(239, "Diego Alexander");
lufthansa.book(635, "Amanda Perna");

console.log(lufthansa);
console.log();

lufthansa.book.call(latam, 365, "Tainara Santos");
lufthansa.book.apply(latam, [425, "Ivanice Ramos"]);

console.log(latam);
console.log();
