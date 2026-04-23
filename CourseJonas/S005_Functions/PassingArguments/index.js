"use strict";

// Primitive type
const flight = "LH234";

// Reference type
const diego = {
    firstName: "Diego Alexander",
    passport: 123456789,
};

const checkIn = function (flightNumber, passenger) {
    flightNumber = "LH999";
    passenger.firstName = "Mr." + passenger.firstName;
};

checkIn(flight, diego);

console.log(flight);
console.log(diego);
