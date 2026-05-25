"use strict";

const number = 3884764.23;

const options = {
    style: "currency",
    unit: "celsius",
    currency: "EUR",
};

console.log(Intl.NumberFormat("en-US", options).format(number));
console.log(Intl.NumberFormat("en-GB", options).format(number));
console.log(Intl.NumberFormat("pt-BR", options).format(number));
