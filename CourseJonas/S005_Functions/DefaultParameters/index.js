"use strict";

const bookings = [];

const createBooking = function (
    flightNumber,
    numberOfPassengers = 1,
    price = 100.0,
) {
    const booking = {
        flightNumber,
        numberOfPassengers,
        price,
    };

    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH157", 2, 500);
createBooking("LH361", undefined, 200);

console.log(bookings);
